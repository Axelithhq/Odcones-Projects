"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Pause, Play, Square, Settings2, Info } from "lucide-react";
import { useReadAloud } from "@/lib/useReadAloud";
import { useTranslation } from "@/lib/i18n";

export function ReadAloudControls() {
  const { speechState, toggleSpeech, stopSpeech, speed, setSpeed, hasOdiaVoiceNotice, setHasOdiaVoiceNotice } = useReadAloud();
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative inline-flex items-center gap-1.5">
      {/* Main Speaker Button */}
      <button
        onClick={toggleSpeech}
        className={`px-3 py-1.5 rounded-full border text-xs font-bold transition-all flex items-center gap-2 ${
          speechState === "speaking"
            ? "bg-harvest-500 text-forest-950 border-harvest-400 shadow-lg shadow-harvest-500/20"
            : speechState === "paused"
            ? "bg-forest-800 text-harvest-300 border-forest-600"
            : "bg-forest-900/60 text-sand-200/80 border-forest-700/50 hover:text-sand-50 hover:bg-forest-800"
        }`}
        aria-label={speechState === "speaking" ? "Pause read aloud" : "Read page aloud"}
        data-cursor-text="AUDIO"
      >
        {speechState === "speaking" ? (
          <>
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-forest-950 h-full animate-bounce" />
              <span className="w-0.5 bg-forest-950 h-2/3 animate-bounce [animation-delay:0.15s]" />
              <span className="w-0.5 bg-forest-950 h-full animate-bounce [animation-delay:0.3s]" />
            </div>
            <span>{t("nav.read_aloud")}</span>
          </>
        ) : speechState === "paused" ? (
          <>
            <Play className="w-3.5 h-3.5" />
            <span>Resume</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-harvest-400" />
            <span>{t("nav.read_aloud")}</span>
          </>
        )}
      </button>

      {/* Stop Button (Active during speech/pause) */}
      {speechState !== "idle" && (
        <button
          onClick={stopSpeech}
          className="p-1.5 rounded-full bg-forest-900 border border-forest-700 text-sand-200 hover:text-rose-400"
          title="Stop reading"
        >
          <Square className="w-3 h-3 fill-current" />
        </button>
      )}

      {/* Speed Controls Popover Toggle */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="p-1.5 rounded-full bg-forest-900/50 border border-forest-700/50 text-sand-200/70 hover:text-sand-50"
        title="Speech Speed Settings"
      >
        <Settings2 className="w-3.5 h-3.5" />
      </button>

      {/* Speed Selector Popover */}
      {showSettings && (
        <div className="absolute top-full right-0 mt-2 p-3 rounded-2xl bg-forest-950 border border-forest-700/60 shadow-2xl z-50 w-44 space-y-2 text-xs">
          <span className="text-[10px] font-bold text-harvest-400 uppercase tracking-widest block">
            SPEECH SPEED
          </span>
          <div className="grid grid-cols-4 gap-1">
            {[0.75, 1, 1.25, 1.5].map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSpeed(s);
                  setShowSettings(false);
                }}
                className={`py-1 rounded text-[11px] font-mono font-bold ${
                  speed === s
                    ? "bg-harvest-500 text-forest-950"
                    : "bg-forest-900 text-sand-200/80 hover:bg-forest-800"
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
        <div className="fixed bottom-6 right-6 max-w-sm p-4 rounded-2xl bg-forest-950 border border-harvest-500/50 text-sand-50 text-xs shadow-2xl z-50 flex items-start gap-3">
          <Info className="w-5 h-5 text-harvest-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block text-harvest-400 font-display">Odia Voice Notice</strong>
            <p className="text-[11px] text-sand-200/80 leading-relaxed">
              An Odia system speech voice is not installed on this device. The website remains 100% translated in Odia for reading.
            </p>
            <button
              onClick={() => setHasOdiaVoiceNotice(false)}
              className="text-[10px] font-bold text-harvest-400 underline pt-1"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
