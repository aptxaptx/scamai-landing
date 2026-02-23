"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import type { NewsletterDetail, Article, Section } from "@/types/newsletter";
import { EditorHeader } from "./editor/EditorHeader";
import { ExecutiveSummaryEditor } from "./editor/ExecutiveSummaryEditor";
import { TopArticlesEditor } from "./editor/TopArticlesEditor";
import { SectionsEditor } from "./editor/SectionsEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterEditor({
  newsletter: initial,
}: {
  newsletter: NewsletterDetail;
}) {
  const [data, setData] = useState<NewsletterDetail>({ ...initial });
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  const update = useCallback(<K extends keyof NewsletterDetail>(
    key: K,
    value: NewsletterDetail[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  }, []);

  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      // Save content (executiveSummary, top3Articles, sections)
      const contentRes = await fetch(`/api/admin/newsletter/${data.id}/content`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          executiveSummary: data.executiveSummary,
          top3Articles: data.top3Articles,
          sections: data.sections,
          title: data.title,
          date: data.date,
        }),
      });

      if (!contentRes.ok) {
        const err = await contentRes.json();
        toast.error(err.error || "Failed to save");
        setSaving(false);
        return;
      }

      setDirty(false);
      toast.success("Newsletter saved successfully");
    } catch {
      toast.error("Network error. Please try again.");
    }
    setSaving(false);
  }, [data]);

  return (
    <div className="space-y-6 pb-8">
      <EditorHeader
        newsletter={data}
        dirty={dirty}
        saving={saving}
        onSave={handleSave}
      />

      {/* Metadata: Title & Date */}
      <Card className="border-gray-800 bg-gray-950">
        <CardHeader>
          <CardTitle className="text-base text-white">Newsletter Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="nl-title" className="mb-1 text-xs text-gray-500">Title</Label>
              <Input
                id="nl-title"
                value={data.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Newsletter title"
                className="border-gray-800 bg-black text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
              />
            </div>
            <div>
              <Label htmlFor="nl-date" className="mb-1 text-xs text-gray-500">Date</Label>
              <Input
                id="nl-date"
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
                placeholder="e.g. February 23, 2026"
                className="border-gray-800 bg-black text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <ExecutiveSummaryEditor
        value={data.executiveSummary}
        onChange={(v) => update("executiveSummary", v)}
      />

      <TopArticlesEditor
        articles={data.top3Articles}
        onChange={(articles) => update("top3Articles", articles)}
      />

      <SectionsEditor
        sections={data.sections}
        onChange={(sections) => update("sections", sections)}
      />

      {/* Sticky save bar on mobile */}
      {dirty && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-800 bg-black/90 p-3 backdrop-blur-md sm:hidden">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full rounded-lg bg-[#245FFF] py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      )}
    </div>
  );
}
