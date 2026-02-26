import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  necessary: boolean; // Always true
}

interface CookieStore {
  preferences: CookiePreferences;
  consentGiven: boolean;
  setPreferences: (preferences: CookiePreferences) => void;
  setConsentGiven: (given: boolean) => void;
  resetCookies: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const useCookieStore = create<CookieStore>()(
  persist(
    (set) => ({
      preferences: defaultPreferences,
      consentGiven: false,
      setPreferences: (preferences) => set({ preferences }),
      setConsentGiven: (given) => set({ consentGiven: given }),
      resetCookies: () =>
        set({
          preferences: defaultPreferences,
          consentGiven: false,
        }),
    }),
    {
      name: "cookie-consent-storage",
    },
  ),
);
