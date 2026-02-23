"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { ArticleCard } from "./ArticleCard";
import { ConfirmDialog } from "./ConfirmDialog";
import type { Article, Section } from "@/types/newsletter";
import { cn } from "@/lib/utils";

interface SectionBlockProps {
  section: Section;
  onChange: (updated: Section) => void;
  onRemove: () => void;
  defaultOpen?: boolean;
}

function blankArticle(): Article {
  return {
    title: "",
    url: "",
    source: "",
    publishedAt: new Date().toISOString(),
    takeaway: "",
    description: "",
  };
}

export function SectionBlock({ section, onChange, onRemove, defaultOpen = false }: SectionBlockProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [confirmOpen, setConfirmOpen] = useState(false);

  function updateTitle(title: string) {
    onChange({ ...section, title });
  }

  function updateArticle(index: number, updated: Article) {
    const next = [...section.articles];
    next[index] = updated;
    onChange({ ...section, articles: next });
  }

  function removeArticle(index: number) {
    onChange({ ...section, articles: section.articles.filter((_, i) => i !== index) });
  }

  function moveArticle(index: number, direction: -1 | 1) {
    const next = [...section.articles];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange({ ...section, articles: next });
  }

  function addArticle() {
    onChange({ ...section, articles: [...section.articles, blankArticle()] });
  }

  return (
    <Card className="border-gray-800 bg-gray-950">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CardHeader className="p-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0 text-gray-500 hover:text-white">
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
            <Input
              value={section.title}
              onChange={(e) => updateTitle(e.target.value)}
              className="h-8 border-transparent bg-transparent px-2 text-sm font-semibold text-white hover:border-gray-700 focus-visible:border-gray-700 focus-visible:ring-[#245FFF]"
              placeholder="Section title"
            />
            <span className="flex-shrink-0 text-xs text-gray-500">
              {section.articles.length} article{section.articles.length !== 1 ? "s" : ""}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 flex-shrink-0 text-red-400 hover:bg-red-900/20 hover:text-red-300"
              onClick={() => setConfirmOpen(true)}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="space-y-3 pt-0">
            {section.articles.length === 0 && (
              <p className="py-2 text-center text-sm text-gray-500">
                No articles in this section.
              </p>
            )}
            {section.articles.map((article, i) => (
              <ArticleCard
                key={i}
                article={article}
                onChange={(updated) => updateArticle(i, updated)}
                onRemove={() => removeArticle(i)}
                onMoveUp={i > 0 ? () => moveArticle(i, -1) : undefined}
                onMoveDown={i < section.articles.length - 1 ? () => moveArticle(i, 1) : undefined}
                index={i}
              />
            ))}
            <Button variant="outline" size="sm" onClick={addArticle} className="w-full">
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              Add Article
            </Button>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Remove Section"
        description={`Remove "${section.title}" and all its articles? Changes are not saved until you click Save.`}
        confirmLabel="Remove Section"
        onConfirm={onRemove}
      />
    </Card>
  );
}
