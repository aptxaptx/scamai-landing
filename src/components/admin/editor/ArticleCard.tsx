"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Trash2, ExternalLink, ImageIcon } from "lucide-react";
import { ConfirmDialog } from "./ConfirmDialog";
import type { Article } from "@/types/newsletter";

interface ArticleCardProps {
  article: Article;
  onChange: (updated: Article) => void;
  onRemove?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  index?: number;
  showBadge?: boolean;
}

export function ArticleCard({
  article,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  index,
  showBadge,
}: ArticleCardProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  function update<K extends keyof Article>(key: K, value: Article[K]) {
    onChange({ ...article, [key]: value });
  }

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-4">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {showBadge && index !== undefined && (
            <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#245FFF] text-xs font-bold text-white">
              {index + 1}
            </span>
          )}
          <span className="text-xs text-gray-500">Article</span>
        </div>
        <div className="flex items-center gap-1">
          {article.url && (
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-white" asChild>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
          {onMoveUp && (
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-white" onClick={onMoveUp}>
              <ChevronUp className="h-3.5 w-3.5" />
            </Button>
          )}
          {onMoveDown && (
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-white" onClick={onMoveDown}>
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
          )}
          {onRemove && (
            <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:bg-red-900/20 hover:text-red-300" onClick={() => setConfirmOpen(true)}>
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor={`title-${index}`} className="mb-1 text-xs text-gray-500">Title</Label>
          <Input
            id={`title-${index}`}
            value={article.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Article title"
            className="border-gray-800 bg-black text-sm text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor={`url-${index}`} className="mb-1 text-xs text-gray-500">URL</Label>
            <Input
              id={`url-${index}`}
              value={article.url}
              onChange={(e) => update("url", e.target.value)}
              placeholder="https://..."
              className="border-gray-800 bg-black text-sm text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
            />
          </div>
          <div>
            <Label htmlFor={`source-${index}`} className="mb-1 text-xs text-gray-500">Source</Label>
            <Input
              id={`source-${index}`}
              value={article.source}
              onChange={(e) => update("source", e.target.value)}
              placeholder="e.g. TechCrunch"
              className="border-gray-800 bg-black text-sm text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
            />
          </div>
        </div>

        <div>
          <Label htmlFor={`image-${index}`} className="mb-1 text-xs text-gray-500">Image URL</Label>
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <Input
                id={`image-${index}`}
                value={article.imageUrl || ""}
                onChange={(e) => {
                  setImgError(false);
                  update("imageUrl", e.target.value || undefined);
                }}
                placeholder="https://example.com/image.jpg"
                className="border-gray-800 bg-black text-sm text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
              />
            </div>
            {article.imageUrl && !imgError ? (
              <img
                src={article.imageUrl}
                alt="Preview"
                onError={() => setImgError(true)}
                className="h-10 w-16 flex-shrink-0 rounded border border-gray-700 object-cover"
              />
            ) : (
              <div className="flex h-10 w-16 flex-shrink-0 items-center justify-center rounded border border-gray-800 bg-gray-900">
                <ImageIcon className="h-4 w-4 text-gray-600" />
              </div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor={`takeaway-${index}`} className="mb-1 text-xs text-gray-500">
            {showBadge ? "Key Takeaway" : "Description"}
          </Label>
          <Textarea
            id={`takeaway-${index}`}
            value={showBadge ? (article.takeaway || "") : (article.description || "")}
            onChange={(e) => update(showBadge ? "takeaway" : "description", e.target.value)}
            rows={2}
            placeholder={showBadge ? "Key insight from this article..." : "Brief description..."}
            className="border-gray-800 bg-black text-sm text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
          />
        </div>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Remove Article"
        description="Remove this article? Changes are not saved until you click Save."
        onConfirm={() => onRemove?.()}
      />
    </div>
  );
}
