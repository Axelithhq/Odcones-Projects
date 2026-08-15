"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "./i18n";

export type SpeechState = "idle" | "speaking" | "paused";

export function useReadAloud() {
  const [speechState, setSpeechState] = useState<SpeechState>("idle");
  const [speed, setSpeed] = useState<number>(1);
  const [hasOdiaVoiceNotice, setHasOdiaVoiceNotice] = useState<boolean>(false);
  const pathname = usePathname();
  const { language } = useTranslation();

  const chunksRef = useRef<HTMLElement[]>([]);
  const currentChunkIdxRef = useRef<number>(0);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const activeElementRef = useRef<HTMLElement | null>(null);

  // Initialize SpeechSynthesis reference
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Stop speech on route change
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      clearHighlight();
      setSpeechState("idle");
    }
  }, [pathname]);

  const clearHighlight = () => {
    if (activeElementRef.current) {
      activeElementRef.current.classList.remove("speech-highlight");
      activeElementRef.current = null;
    }
  };

  // Find all readable elements inside <main>
  const extractReadableElements = (): HTMLElement[] => {
    const main = document.querySelector("main") || document.body;
    const allElements = main.querySelectorAll<HTMLElement>(
      "h1, h2, h3, h4, p, li, [data-read-aloud]"
    );

    const readable: HTMLElement[] = [];
    allElements.forEach((el) => {
      // Exclude nav, footer, buttons, hidden elements
      if (
        !el.closest("nav") &&
        !el.closest("header") &&
        !el.closest("footer") &&
        !el.closest("button") &&
        !el.closest("[aria-hidden='true']") &&
        el.innerText.trim().length > 3
      ) {
        readable.push(el);
      }
    });

    return readable;
  };

  const speakChunkAtIndex = useCallback(
    (index: number) => {
      const synth = synthRef.current;
      if (!synth || index >= chunksRef.current.length) {
        clearHighlight();
        setSpeechState("idle");
        return;
      }

      synth.cancel();
      clearHighlight();

      const el = chunksRef.current[index];
      const textToRead = el.innerText.trim();
      if (!textToRead) {
        speakChunkAtIndex(index + 1);
        return;
      }

      // Highlight current element
      el.classList.add("speech-highlight");
      activeElementRef.current = el;
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = speed;

      // Detect available voices
      const voices = synth.getVoices();
      if (language === "or") {
        const odiaVoice = voices.find(
          (v) => v.lang.startsWith("or") || v.name.toLowerCase().includes("odia") || v.name.toLowerCase().includes("oriya")
        );
        if (odiaVoice) {
          utterance.voice = odiaVoice;
          utterance.lang = "or-IN";
        } else {
          // Odia voice not installed on device
          setHasOdiaVoiceNotice(true);
          clearHighlight();
          setSpeechState("idle");
          return;
        }
      } else {
        const indianEnglishVoice = voices.find(
          (v) => v.lang === "en-IN" || v.lang.startsWith("en")
        );
        if (indianEnglishVoice) utterance.voice = indianEnglishVoice;
        utterance.lang = "en-IN";
      }

      utterance.onend = () => {
        currentChunkIdxRef.current = index + 1;
        speakChunkAtIndex(index + 1);
      };

      utterance.onerror = () => {
        clearHighlight();
        setSpeechState("idle");
      };

      synth.speak(utterance);
    },
    [language, speed]
  );

  const startSpeech = () => {
    const synth = synthRef.current;
    if (!synth) return;

    setHasOdiaVoiceNotice(false);
    const elements = extractReadableElements();
    if (elements.length === 0) return;

    chunksRef.current = elements;
    currentChunkIdxRef.current = 0;
    setSpeechState("speaking");
    speakChunkAtIndex(0);
  };

  const pauseSpeech = () => {
    const synth = synthRef.current;
    if (synth && synth.speaking) {
      synth.pause();
      setSpeechState("paused");
    }
  };

  const resumeSpeech = () => {
    const synth = synthRef.current;
    if (synth && synth.paused) {
      synth.resume();
      setSpeechState("speaking");
    } else {
      startSpeech();
    }
  };

  const stopSpeech = () => {
    const synth = synthRef.current;
    if (synth) {
      synth.cancel();
    }
    clearHighlight();
    setSpeechState("idle");
  };

  const toggleSpeech = () => {
    if (speechState === "speaking") {
      pauseSpeech();
    } else if (speechState === "paused") {
      resumeSpeech();
    } else {
      startSpeech();
    }
  };

  return {
    speechState,
    toggleSpeech,
    stopSpeech,
    speed,
    setSpeed,
    hasOdiaVoiceNotice,
    setHasOdiaVoiceNotice
  };
}
