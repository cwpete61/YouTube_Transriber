import * as React from "react";

interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "left" | "right" | "top" | "bottom";
}

const Sheet = ({ children, open, onOpenChange, side = "right" }: SheetProps) => {
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50"
          onClick={() => onOpenChange && onOpenChange(false)}
        />
      )}
      
      {/* Sheet content */}
      <div 
        className={`fixed ${side === "right" ? "right-0 top-0 h-full w-64" : "left-0 top-0 h-64 w-full"} bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const SheetTrigger = ({ children, asChild }: SheetTriggerProps) => {
  return <>{children}</>;
};

interface SheetContentProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
}

const SheetContent = ({ children }: SheetContentProps) => {
  return <div className="h-full overflow-y-auto">{children}</div>;
};

interface SheetHeaderProps {
  children: React.ReactNode;
}

const SheetHeader = ({ children }: SheetHeaderProps) => {
  return <div className="p-4 border-b border-gray-200 dark:border-gray-800">{children}</div>;
};

interface SheetTitleProps {
  children: React.ReactNode;
}

const SheetTitle = ({ children }: SheetTitleProps) => {
  return <h2 className="text-lg font-semibold text-black dark:text-zinc-50">{children}</h2>;
};

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle };