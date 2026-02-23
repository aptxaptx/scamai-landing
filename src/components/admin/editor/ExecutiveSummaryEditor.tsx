"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ExecutiveSummaryEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ExecutiveSummaryEditor({ value, onChange }: ExecutiveSummaryEditorProps) {
  return (
    <Card className="border-gray-800 bg-gray-950">
      <CardHeader>
        <CardTitle className="text-base text-white">Executive Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="exec-summary" className="sr-only">Executive Summary</Label>
        <Textarea
          id="exec-summary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          placeholder="Write the executive summary..."
          className="border-gray-800 bg-black text-gray-200 placeholder:text-gray-600 focus-visible:ring-[#245FFF]"
        />
      </CardContent>
    </Card>
  );
}
