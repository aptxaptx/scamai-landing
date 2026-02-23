"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SectionBlock } from "./SectionBlock";
import type { Section } from "@/types/newsletter";

interface SectionsEditorProps {
  sections: Section[];
  onChange: (sections: Section[]) => void;
}

export function SectionsEditor({ sections, onChange }: SectionsEditorProps) {
  function updateSection(index: number, updated: Section) {
    const next = [...sections];
    next[index] = updated;
    onChange(next);
  }

  function removeSection(index: number) {
    onChange(sections.filter((_, i) => i !== index));
  }

  function addSection() {
    onChange([...sections, { title: "New Section", articles: [] }]);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">Sections</h2>
        <Button variant="outline" size="sm" onClick={addSection}>
          <Plus className="mr-1.5 h-3.5 w-3.5" />
          Add Section
        </Button>
      </div>

      {sections.length === 0 && (
        <div className="rounded-lg border border-dashed border-gray-700 p-8 text-center">
          <p className="text-sm text-gray-500">No sections yet. Click &quot;Add Section&quot; to create one.</p>
        </div>
      )}

      {sections.map((section, i) => (
        <SectionBlock
          key={i}
          section={section}
          onChange={(updated) => updateSection(i, updated)}
          onRemove={() => removeSection(i)}
          defaultOpen={i === 0}
        />
      ))}
    </div>
  );
}
