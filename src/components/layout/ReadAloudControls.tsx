"use client";

import React, { useState } from "react";
import { Volume2, Play, Square, Settings2, Info } from "lucide-react";
import { useReadAloud } from "@/lib/useReadAloud";
import { useTranslation } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function ReadAloudControls() {
  const { speechState, toggleSpeech, stopSpeech, speed, setSpeed, hasOdiaVoiceNotice, setHasOdiaVoiceNotice } = useReadAloud();
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const baseBtn = isLight
    ? "bg-white border-[#D4DDD5] text-[#4A5D50] hover:text-harvest-600"
    : "bg-forest-900/60 border-forest-700/50 text-theme-text-muted hover:text-sand-50";

  return (
    <div className="relative inline-flex items-center gap-1.5">
      {/* Main Speaker Button */}
      <button
        onClick={toggleSpeech}
        className={`px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
          speechState === "speaking"
            ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg shadow-harvest-500/20"
            : speechState === "paused"
            ? isLight
              ? "bg-forest-100 text-forest-700 border-forest-400"
              : "bg-forest-800 text-harvest-300 border-forest-600"
            : `${baseBtn} hover:border-harvest-500/50`
        }`}
        aria-label={speechState === "speaking" ? t("readAloud.ariaPause") : t("readAloud.ariaStart")}
        data-cursor-text="AUDIO"
      >
        {speechState === "speaking" ? (
          <>
            <span className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-theme-base h-full animate-bounce" />
              <span className="w-0.5 bg-theme-base h-2/3 animate-bounce [animation-delay:0.15s]" />
              <span className="w-0.5 bg-theme-base h-full animate-bounce [animation-delay:0.3s]" />
            </span>
            <span>{t("nav.readAloud")}</span>
          </>
        ) : speechState === "paused" ? (
          <>
            <Play className="w-3.5 h-3.5" />
            <span>{t("readAloud.resume")}</span>
          </>
        ) : (
          <>
            <Volume2 className={`w-3.5 h-3.5 ${isLight ? "text-harvest-600" : "text-harvest-400"}`} />
            <span>{t("nav.readAloud")}</span>
          </>
        )}
      </button>

      {/* Stop Button */}
      {speechState !== "idle" && (
        <button
          onClick={stopSpeech}
          className={`p-1.5 rounded-full border transition-colors ${
            isLight
              ? "bg-white border-[#D4DDD5] text-[#4A5D50] hover:text-rose-500"
              : "bg-forest-900 border-forest-700 text-theme-text-muted hover:text-rose-400"
          }`}
          title={t("readAloud.stop")}
          aria-label={t("readAloud.ariaStop")}
        >
          <Square className="w-3 h-3 fill-current" />
        </button>
      )}

      {/* Speed Controls Popover Toggle */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className={`p-1.5 rounded-full border transition-colors ${
          isLight
            ? "bg-white border-[#D4DDD5] text-[#4A5D50] hover:text-harvest-600"
            : "bg-forest-900/50 border-forest-700/50 text-theme-text-muted hover:text-sand-50"
        }`}
        title={t("readAloud.speedTitle")}
        aria-label={t("readAloud.speedTitle")}
      >
        <Settings2 className="w-3.5 h-3.5" />
      </button>

      {/* Speed Selector Popover */}
      {showSettings && (
        <div className={`absolute top-full right-0 mt-2 p-3 rounded-2xl border shadow-2xl z-50 w-44 space-y-2 text-xs ${
          isLight
            ? "bg-white border-[#D4DDD5] shadow-forest-900/10"
            : "bg-theme-base border-forest-700/60 shadow-forest-950/60"
        }`}>
          <span className={`text-[10px] font-bold uppercase tracking-widest block ${
            isLight ? "text-harvest-600" : "text-harvest-400"
          }`}>
            {t("readAloud.speed")}
          </span>
          <div className="grid grid-cols-4 gap-1">
            {[0.75, 1, 1.25, 1.5].map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSpeed(s);
                  setShowSettings(false);
                }}
                className={`py-1 rounded text-[11px] font-mono font-bold transition-colors ${
                  speed === s
                    ? "bg-harvest-500 text-forest-950"
                    : isLight
                    ? "bg-[#F0F3EE] text-[#4A5D50] hover:bg-[#E5EAE3]"
                    : "bg-forest-900 text-theme-text-muted hover:bg-forest-800"
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Odia Voice Missing Toast Notice */}
      {hasOdiaVoiceNotice && (
        <div className={`fixed bottom-6 right-6 max-w-sm p-4 rounded-2xl border text-xs shadow-2xl z-[9999] flex items-start gap-3 ${
          isLight
            ? "bg-white border-harvest-500/40 text-[#1A251E]"
            : "bg-theme-base border-harvest-500/50 text-sand-50"
        }`}>
          <Info className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isLight ? "text-harvest-600" : "text-harvest-400"}`} />
          <div className="space-y-1">
            <strong className={`block font-display ${isLight ? "text-harvest-700" : "text-harvest-400"}`}>{t("readAloud.odiaNoticeTitle")}</strong>
            <p className={`text-[11px] leading-relaxed ${isLight ? "text-[#4A5D50]" : "text-theme-text-muted"}`}>
              {t("readAloud.odiaNoticeBody")}
            </p>
            <button
              onClick={() => setHasOdiaVoiceNotice(false)}
              className={`text-[10px] font-bold underline pt-1 ${isLight ? "text-harvest-600" : "text-harvest-400"}`}
            >
              {t("readAloud.dismiss")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
