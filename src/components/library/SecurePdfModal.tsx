"use client";

import React, { useEffect } from "react";
import { X, Lock, ShieldCheck, FileText, AlertCircle, BookOpen } from "lucide-react";

interface SecurePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  pdfUrl: string;
}

export function SecurePdfModal({ isOpen, onClose, title, category, pdfUrl }: SecurePdfModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // 01. Block Keyboard Shortcuts (Print, Save, Developer Tools)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      
      // Block Ctrl+P or Cmd+P (Print)
      if (isCtrlOrCmd && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        alert("🔒 Downloading and Printing of ODCONS Library documents is strictly disabled for copyright protection.");
        return false;
      }

      // Block Ctrl+S or Cmd+S (Save)
      if (isCtrlOrCmd && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        alert("🔒 Downloading and Printing of ODCONS Library documents is strictly disabled for copyright protection.");
        return false;
      }

      // Block F12 & DevTools
      if (e.key === "F12" || (isCtrlOrCmd && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j"))) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 02. Block Context Menu (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("contextmenu", handleContextMenu, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("contextmenu", handleContextMenu, true);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Append hash flags for URLs or pass data URI directly for embedded PDFs
  const secureSrc = pdfUrl.startsWith("data:") 
    ? pdfUrl 
    : `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-forest-950/95 backdrop-blur-xl select-none">
      <div className="w-full h-[95vh] max-w-6xl rounded-3xl bg-forest-950 border border-harvest-400/60 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-forest-900 border-b border-forest-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-forest-950 border border-harvest-400/50 text-harvest-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-harvest-400/20 text-harvest-400 text-[10px] font-mono font-bold uppercase">
                  {category}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-600/60 text-rose-300 text-[9.5px] font-mono font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3 text-rose-400" />
                  <span>NON-DOWNLOADABLE</span>
                </span>
              </div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-sand-50 truncate max-w-xl">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-forest-950 border border-forest-700 text-sand-100 hover:text-rose-400 hover:border-rose-500 transition-all"
            title="Close PDF Reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Security Warning Notice Banner */}
        <div className="px-6 py-2 bg-harvest-400/10 border-b border-harvest-400/20 text-harvest-300 text-[11px] font-mono flex items-center justify-between">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-harvest-400" />
            <span>Protected Reader Mode — Downloading, printing, and context menus are disabled.</span>
          </span>
          <span className="hidden sm:inline-block font-bold">ODCONS DIGITAL LIBRARY</span>
        </div>

        {/* Secure PDF Viewer Container */}
        <div 
          className="flex-1 relative bg-forest-950 overflow-hidden"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Transparent Overlay Shield to intercept drag & download actions */}
          <iframe
            src={secureSrc}
            title={title}
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
