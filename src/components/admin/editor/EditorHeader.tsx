"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Loader2, ExternalLink } from "lucide-react";
import type { NewsletterDetail } from "@/types/newsletter";

interface EditorHeaderProps {
  newsletter: NewsletterDetail;
  dirty: boolean;
  saving: boolean;
  onSave: () => void;
}

export function EditorHeader({ newsletter, dirty, saving, onSave }: EditorHeaderProps) {
  return (
    <div className="space-y-4">
      <a
        href="/admin/newsletter"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </a>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-white">{newsletter.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span>Edition {newsletter.edition}</span>
            <span className="text-gray-700">|</span>
            <span>{newsletter.date}</span>
            <Badge variant={newsletter.published ? "default" : "secondary"} className={newsletter.published ? "bg-green-900/50 text-green-400 hover:bg-green-900/50" : "bg-yellow-900/50 text-yellow-400 hover:bg-yellow-900/50"}>
              {newsletter.published ? "Published" : "Draft"}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href={`/en/newsletter/${newsletter.slug || newsletter.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Preview
            </a>
          </Button>
          <Button
            size="sm"
            onClick={onSave}
            disabled={!dirty || saving}
            className="bg-[#245FFF] hover:bg-[#1a4fd4]"
          >
            {saving ? (
              <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
            ) : (
              <Save className="mr-1.5 h-3.5 w-3.5" />
            )}
            {saving ? "Saving..." : dirty ? "Save Changes" : "Saved"}
          </Button>
        </div>
      </div>
    </div>
  );
}
