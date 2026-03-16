# Antigravity Build Plan  
## Searchable Knowledge Archive System

Archive System is a **knowledge ingestion, enrichment, indexing, and retrieval platform** that captures information from URLs, YouTube videos, images, scanned documents, and user notes. The system extracts structured knowledge, stores it in a relational + vector database, and allows advanced retrieval through semantic search, filters, tags, collections, and metadata queries.

This document defines the architecture and build plan for **Antigravity autonomous development**.

---

# System Objectives

The system must:

1. Capture knowledge from multiple sources
2. Extract structured and semantic data
3. Store both raw and processed information
4. Support semantic and keyword search
5. Allow tagging, collections, and organization
6. Scale as a personal or enterprise knowledge base

---

# Core System Architecture


USER INPUT
│
│
▼
INGESTION LAYER
│
│
▼
EXTRACTION PIPELINE
│
│
▼
ENRICHMENT ENGINE
│
│
▼
STORAGE LAYER
├ relational metadata database
├ vector embedding database
└ blob storage for assets
│
│
▼
RETRIEVAL ENGINE
├ semantic search
├ keyword search
├ filters
├ tags
└ collections
│
│
▼
USER INTERFACE


---

# Technology Stack

## Frontend

- Next.js
- React
- TailwindCSS
- ShadCN UI components
- React Query

## Backend

- Node.js
- FastAPI or Next.js API routes
- Worker queue service

## Databases

Primary relational database:

- PostgreSQL

Vector database:

- pgvector extension for PostgreSQL

Object storage:

- S3 / Cloudflare R2 / Supabase Storage

Queue system:

- Redis + BullMQ

---

# Core Data Model

Every item saved becomes a **Record Object**.

---

## Records Table


records


Fields:

| Field | Type | Description |
|------|------|-------------|
id | UUID | unique record id
title | text | record title
source_type | enum | url / youtube / image / scan / note
source_url | text | original source
description | text | optional user description
clean_text | text | processed text
summary_short | text | short summary
summary_long | text | extended summary
transcript | text | video transcript
ocr_text | text | OCR extracted text
metadata | jsonb | flexible metadata
asset_id | uuid | optional file asset
created_at | timestamp | record creation
captured_at | timestamp | source capture time
updated_at | timestamp | record update

---

## Record Chunks

Chunked content for embeddings.


record_chunks


Fields:

| Field | Type |
|------|------|
id | uuid
record_id | uuid
chunk_index | integer
chunk_text | text
embedding | vector
token_count | integer
created_at | timestamp

---

## Tags


tags


| Field | Type |
|------|------|
id | uuid
name | text
slug | text
color | text

---

## Record Tags


record_tags


| Field | Type |
|------|------|
record_id | uuid
tag_id | uuid

---

## Assets


assets


| Field | Type |
|------|------|
id | uuid
file_name | text
mime_type | text
file_size | integer
storage_path | text
thumbnail_path | text
checksum | text

---

## Entities

Detected people, tools, companies, etc.


entities


| Field | Type |
|------|------|
id | uuid
record_id | uuid
entity_name | text
entity_type | text
confidence | float

---

# Input Interfaces

The system provides **four ingestion forms**.

---

# 1 URL Ingestion Form

Input fields:

- URL
- Title (optional)
- Tags
- Save HTML snapshot
- Save screenshot

Processing steps:

1. Fetch webpage
2. Extract readable content
3. Extract metadata
4. Generate summary
5. Extract entities
6. Chunk text
7. Generate embeddings
8. Store record

---

# 2 YouTube Ingestion Form

Input fields:

- YouTube URL
- Title override
- Tags
- Supporting links

Processing pipeline:

1. Fetch metadata via YouTube API
2. Pull title
3. Pull description
4. Extract supporting links
5. Download audio
6. Transcribe video
7. Generate summary
8. Extract entities
9. Chunk transcript
10. Generate embeddings
11. Save record

---

# 3 Image / Scan Ingestion Form

Input fields:

- Upload image or scan
- Save original asset
- Title
- Tags

Processing pipeline:

1. Upload image
2. OCR text extraction
3. Image caption generation
4. Document classification
5. Extract structured text
6. Generate summary
7. Chunk extracted text
8. Generate embeddings
9. Save record

---

# 4 Note Ingestion Form

Input fields:

- Title
- Note body
- Tags
- Category

Processing pipeline:

1. Save raw note
2. Generate summary
3. Extract entities
4. Chunk note text
5. Generate embeddings
6. Store record

---

# Enrichment Engine

After ingestion, each record runs through enrichment steps.

Processes:

- summarization
- keyword extraction
- entity extraction
- auto-tagging
- topic classification
- deduplication detection
- language detection

---

# Chunking Strategy

Content must be chunked before embeddings.

Rules:


chunk_size: 500 tokens
overlap: 100 tokens


Each chunk generates an embedding vector.

---

# Embedding Generation

Supported models:

- OpenAI embeddings
- Gemini embeddings

Embedding vectors stored in:


record_chunks.embedding


---

# Retrieval Engine

Search combines three methods.

---

## Keyword Search

PostgreSQL full text search.

Fields indexed:

- title
- summary
- transcript
- OCR text
- note text

---

## Semantic Search

Vector similarity search.


SELECT * FROM record_chunks
ORDER BY embedding <-> query_embedding
LIMIT 20


---

## Filter Search

Filters available:

- source type
- tags
- category
- date range
- alphabetical order
- newest / oldest

---

# Ranking Strategy

Search results ranked by:


score =
0.5 semantic similarity
0.3 keyword relevance
0.2 recency


---

# User Interface

## Navigation


Dashboard
Add Record
Archive
Tags
Collections
Review Queue
Saved Searches
Settings


---

# Archive View

Controls:

- search bar
- source type filter
- tag filter
- date range
- sort options

Sort options:

- newest
- oldest
- alphabetical
- recently updated

View modes:

- grid
- list
- table

---

# Record Detail Page

Displays:

- title
- source metadata
- summary
- transcript or OCR text
- tags
- related records
- original file preview
- manual notes

Actions:

- regenerate summary
- retag
- extract entities
- find related records
- ask questions about record

---

# Worker Processing System

Background workers process heavy tasks.

Workers include:


webpage_parser_worker
youtube_transcription_worker
ocr_worker
embedding_worker
summary_worker
entity_extraction_worker
deduplication_worker


Queue system:


Redis + BullMQ


---

# Storage System

Files stored in object storage.

Supported providers:

- AWS S3
- Cloudflare R2
- Supabase Storage

Files stored:

- uploaded images
- scans
- YouTube audio files
- page snapshots
- thumbnails

---

# Security and Permissions

Access levels:

- private
- shared
- public

Capabilities:

- delete original asset
- keep extracted text
- restore deleted records

---

# Phase Development Plan

---

# Phase 1 — Foundation

Build:

- authentication
- database schema
- archive interface
- record creation
- tagging system
- storage integration

---

# Phase 2 — Ingestion

Build:

- URL ingestion pipeline
- YouTube ingestion pipeline
- image OCR pipeline
- note ingestion

---

# Phase 3 — Extraction

Build:

- summarization service
- entity extraction
- keyword extraction
- auto tagging

---

# Phase 4 — Retrieval

Build:

- hybrid search
- vector search
- filters
- date sorting
- collections

---

# Phase 5 — Intelligence Layer

Build:

- duplicate detection
- saved searches
- record relationships
- AI Q&A across records
- batch summarization

---

# Future Expansion

Potential features:

- browser clipper
- email ingestion
- bulk import
- API ingestion endpoint
- mobile capture app
- change tracking for saved URLs
- knowledge graph visualization

---

# System Summary

The system acts as a **personal knowledge archive engine** capable of capturing, structuring, enriching, and retrieving knowledge across multiple input types.

It merges:

- structured storage
- semantic embeddings
- metadata filters
- intelligent retrieval

into a single searchable archive platform.
