import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { groxQueries, type GroXQuery } from "./meetGroxData";

interface QueryMenuProps {
  onSelect: (query: GroXQuery) => void;
  disabled?: boolean;
  activeQueryId?: string | null;
}

export function QueryMenu({ onSelect, disabled, activeQueryId }: QueryMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (query: GroXQuery) => {
    onSelect(query);
    setOpen(false);
  };

  return (
    <div ref={menuRef} className="relative">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-fingro-muted">
        Suggested
      </p>

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-fingro-border/40 bg-white px-4 py-3 text-left text-sm text-fingro-muted shadow-sm transition-colors hover:border-fingro-purple/25 hover:text-fingro-purple-light disabled:cursor-not-allowed disabled:opacity-50"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>Ask GroX a question...</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-fingro-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute bottom-full left-0 z-20 mb-2 max-h-[220px] w-full overflow-y-auto rounded-xl border border-fingro-border/40 bg-white py-1 shadow-lg [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-fingro-purple/20"
        >
          {groxQueries.map((query) => (
            <li key={query.id} role="option" aria-selected={activeQueryId === query.id}>
              <button
                type="button"
                onClick={() => handleSelect(query)}
                className={`w-full cursor-pointer px-4 py-2.5 text-left text-sm transition-colors hover:bg-fingro-purple/5 ${
                  activeQueryId === query.id
                    ? "bg-fingro-purple/10 font-semibold text-fingro-purple"
                    : "text-fingro-ink"
                }`}
              >
                {query.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
