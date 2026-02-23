"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Newsletter, Stats } from "@/types/newsletter";

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function NewsletterDashboard({
  newsletters: initialNewsletters,
  stats: initialStats,
}: {
  newsletters: Newsletter[];
  stats: Stats;
}) {
  const router = useRouter();
  const [newsletters, setNewsletters] = useState(initialNewsletters);
  const [stats, setStats] = useState(initialStats);
  const [generating, setGenerating] = useState(false);
  const [importing, setImporting] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [togglingId, setTogglingId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [batchDeleting, setBatchDeleting] = useState(false);
  const [showBatchDeleteModal, setShowBatchDeleteModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function refreshData() {
    try {
      const [nlRes, stRes] = await Promise.all([
        fetch("/api/admin/newsletter"),
        fetch("/api/admin/newsletter/stats"),
      ]);
      if (nlRes.ok) {
        const data = await nlRes.json();
        setNewsletters(data.newsletters || []);
      }
      if (stRes.ok) {
        setStats(await stRes.json());
      }
    } catch { /* ignore */ }
  }

  async function handleGenerate() {
    setGenerating(true);
    try {
      const res = await fetch("/api/admin/newsletter", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        await refreshData();
      } else {
        alert(data.error || "Failed to generate newsletter");
      }
    } catch {
      alert("Failed to generate newsletter");
    }
    setGenerating(false);
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/newsletter/${deleteId}`, { method: "DELETE" });
      if (res.ok) {
        setDeleteId(null);
        selectedIds.delete(deleteId);
        setSelectedIds(new Set(selectedIds));
        await refreshData();
      }
    } catch { /* ignore */ }
    setDeleting(false);
  }

  async function handleBatchDelete() {
    if (selectedIds.size === 0) return;
    setBatchDeleting(true);
    try {
      const res = await fetch("/api/admin/newsletter", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: Array.from(selectedIds) }),
      });
      if (res.ok) {
        setSelectedIds(new Set());
        setShowBatchDeleteModal(false);
        await refreshData();
      }
    } catch { /* ignore */ }
    setBatchDeleting(false);
  }

  async function handleImport(file: File) {
    setImporting(true);
    try {
      const markdown = await file.text();
      const res = await fetch("/api/admin/newsletter/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdown }),
      });
      const data = await res.json();
      if (data.success) {
        await refreshData();
      } else {
        alert(data.error || "Failed to import newsletter");
      }
    } catch {
      alert("Failed to import newsletter");
    }
    setImporting(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleTogglePublish(id: number) {
    setTogglingId(id);
    try {
      const res = await fetch(`/api/admin/newsletter/${id}/toggle-publish`, { method: "POST" });
      if (res.ok) {
        await refreshData();
      }
    } catch { /* ignore */ }
    setTogglingId(null);
  }

  function toggleSelect(id: number) {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  }

  function toggleSelectAll() {
    if (selectedIds.size === newsletters.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(newsletters.map(nl => nl.id)));
    }
  }

  const statCards = [
    { label: "Total", value: stats.total, color: "border-gray-700" },
    { label: "Published", value: stats.published, color: "border-green-800" },
    { label: "Drafts", value: stats.drafts, color: "border-yellow-800" },
  ];

  return (
    <div>
      {/* Header Row */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-white">Newsletters</h1>
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".md,.markdown"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImport(file);
            }}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={importing}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 hover:text-white disabled:opacity-50"
          >
            {importing ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Importing...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Import MD
              </>
            )}
          </button>
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="inline-flex items-center gap-2 rounded-lg bg-[#245FFF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1a4fd4] disabled:opacity-50"
          >
            {generating ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Generate Newsletter
              </>
            )}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            className={`rounded-xl border ${card.color} bg-gray-900/40 p-5`}
          >
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="mt-1 text-3xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Batch Action Bar */}
      {selectedIds.size > 0 && (
        <div className="mb-4 flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-900/60 px-4 py-2.5">
          <span className="text-sm text-gray-300">
            {selectedIds.size} selected
          </span>
          <button
            onClick={() => setShowBatchDeleteModal(true)}
            className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700"
          >
            Delete Selected
          </button>
          <button
            onClick={() => setSelectedIds(new Set())}
            className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            Clear
          </button>
        </div>
      )}

      {/* Newsletter Table */}
      {newsletters.length === 0 ? (
        <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-12 text-center">
          <p className="text-gray-500">No newsletters yet. Click &quot;Generate Newsletter&quot; to create one.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/60">
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.size === newsletters.length && newsletters.length > 0}
                    onChange={toggleSelectAll}
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#245FFF] focus:ring-[#245FFF] focus:ring-offset-0"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Edition</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Title</th>
                <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {newsletters.map((nl) => (
                <tr key={nl.id} className={`transition hover:bg-gray-900/40 ${selectedIds.has(nl.id) ? 'bg-gray-900/30' : ''}`}>
                  <td className="w-10 px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(nl.id)}
                      onChange={() => toggleSelect(nl.id)}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#245FFF] focus:ring-[#245FFF] focus:ring-offset-0"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-xs font-bold text-white">
                      {nl.edition}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-white">{nl.title}</p>
                    {nl.summary && (
                      <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">{nl.summary}</p>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-gray-400 md:table-cell">
                    {nl.date}
                  </td>
                  <td className="px-4 py-3">
                    {nl.published ? (
                      <span className="inline-flex items-center rounded-full bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-400">
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`/admin/newsletter/${nl.id}`}
                        className="rounded-md px-2.5 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-gray-800 hover:text-white"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => handleTogglePublish(nl.id)}
                        disabled={togglingId === nl.id}
                        className="rounded-md px-2.5 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-gray-800 hover:text-white disabled:opacity-50"
                      >
                        {togglingId === nl.id ? "..." : nl.published ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() => setDeleteId(nl.id)}
                        className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-900/20"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Single Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-2 text-lg font-bold text-white">Delete Newsletter</h2>
            <p className="mb-6 text-sm text-gray-400">
              Are you sure? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                disabled={deleting}
                className="flex-1 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Batch Delete Confirmation Modal */}
      {showBatchDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-2 text-lg font-bold text-white">Delete {selectedIds.size} Newsletter{selectedIds.size > 1 ? 's' : ''}</h2>
            <p className="mb-6 text-sm text-gray-400">
              Are you sure you want to delete {selectedIds.size} newsletter{selectedIds.size > 1 ? 's' : ''}? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBatchDeleteModal(false)}
                disabled={batchDeleting}
                className="flex-1 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleBatchDelete}
                disabled={batchDeleting}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                {batchDeleting ? "Deleting..." : `Delete ${selectedIds.size}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
