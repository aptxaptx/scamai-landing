"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/types/newsletter";

interface TopArticlesEditorProps {
  articles: Article[];
  onChange: (articles: Article[]) => void;
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

export function TopArticlesEditor({ articles, onChange }: TopArticlesEditorProps) {
  function updateArticle(index: number, updated: Article) {
    const next = [...articles];
    next[index] = updated;
    onChange(next);
  }

  function removeArticle(index: number) {
    onChange(articles.filter((_, i) => i !== index));
  }

  function moveArticle(index: number, direction: -1 | 1) {
    const next = [...articles];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  function addArticle() {
    if (articles.length >= 3) return;
    onChange([...articles, blankArticle()]);
  }

  return (
    <Card className="border-gray-800 bg-gray-950">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base text-white">Top Articles</CardTitle>
        {articles.length < 3 && (
          <Button variant="outline" size="sm" onClick={addArticle}>
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Add
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        {articles.length === 0 && (
          <p className="py-4 text-center text-sm text-gray-500">
            No top articles yet. Click &quot;Add&quot; to create one.
          </p>
        )}
        {articles.map((article, i) => (
          <ArticleCard
            key={i}
            article={article}
            onChange={(updated) => updateArticle(i, updated)}
            onRemove={() => removeArticle(i)}
            onMoveUp={i > 0 ? () => moveArticle(i, -1) : undefined}
            onMoveDown={i < articles.length - 1 ? () => moveArticle(i, 1) : undefined}
            index={i}
            showBadge
          />
        ))}
      </CardContent>
    </Card>
  );
}
