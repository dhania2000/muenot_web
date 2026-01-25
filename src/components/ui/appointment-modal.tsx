"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentUrl: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  appointmentUrl,
}: AppointmentModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Modal */}
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 overflow-hidden"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={cn(
                "relative w-full max-w-5xl overflow-hidden flex flex-col",
                "bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950",
                "border border-violet-500/20 rounded-xl sm:rounded-2xl shadow-2xl",
                "h-[95vh] sm:h-[90vh]"
              )}
            >
              {/* Decorative gradient orbs */}
              <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-violet-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between p-3 sm:p-4 border-b border-violet-500/10 flex-shrink-0">
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white truncate">
                    Schedule Appointment
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 hidden sm:block">
                    Choose a convenient time to connect with us
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className={cn(
                    "p-2 rounded-lg transition-colors flex-shrink-0",
                    "hover:bg-violet-500/10 text-gray-400 hover:text-white",
                    "border border-transparent hover:border-violet-500/20"
                  )}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Content - Google Calendar iframe */}
              <div className="relative z-10 p-2 sm:p-4 overflow-hidden flex-1 flex flex-col">
                <div 
                  className="relative overflow-hidden rounded-lg sm:rounded-xl border border-violet-500/20 bg-slate-950 shadow-2xl w-full h-full" 
                  style={{ 
                    boxShadow: "inset 0 0 60px rgba(139, 92, 246, 0.1)"
                  }}
                >
                  <style jsx>{`
                    iframe {
                      border: 0;
                      filter: invert(0.92) hue-rotate(180deg) brightness(1.15) contrast(0.95) saturate(1.2);
                      color-scheme: dark;
                    }
                  `}</style>
                  <iframe
                    src={appointmentUrl}
                    style={{ 
                      border: 0,
                      filter: "invert(0.92) hue-rotate(180deg) brightness(1.15) contrast(0.95) saturate(1.2)",
                      colorScheme: "dark",
                    }}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Google Calendar Appointment Scheduling"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
