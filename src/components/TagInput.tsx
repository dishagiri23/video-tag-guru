
import React, { useState, KeyboardEvent, useRef } from "react";
import { Tag } from "@/components/ui/tag";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function TagInput({ 
  tags, 
  onTagsChange, 
  placeholder = "Add tag...", 
  className 
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onTagsChange([...tags, inputValue.trim()]);
      }
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      onTagsChange(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagsChange(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      onTagsChange([...tags, inputValue.trim()]);
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      {tags.map((tag, index) => (
        <Tag key={index} variant="primary" className="group">
          {tag}
          <button
            type="button"
            className="ml-1 text-muted-foreground hover:text-foreground focus:outline-none"
            onClick={() => removeTag(tag)}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove {tag}</span>
          </button>
        </Tag>
      ))}
      <div className="flex items-center border border-input rounded-full px-3 py-1 bg-background flex-grow max-w-xs">
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="border-0 p-0 h-5 text-xs focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
        />
        <button
          type="button"
          onClick={handleAddButtonClick}
          className="ml-1 text-muted-foreground hover:text-foreground"
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add tag</span>
        </button>
      </div>
    </div>
  );
}
