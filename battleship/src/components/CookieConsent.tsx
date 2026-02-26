import CookieConsent from "react-cookie-consent";
import { useCookieStore } from "../store/cookieStore";
import { useEffect, useState } from "react";

export const CookieConsentBanner = () => {
  const { consentGiven, setConsentGiven, preferences, setPreferences } =
    useCookieStore();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage
    const stored = localStorage.getItem("cookie-consent-storage");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.state?.consentGiven) {
          setConsentGiven(true);
        }
      } catch (e) {
        console.error("Failed to parse cookie consent storage:", e);
      }
    }
  }, [setConsentGiven]);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    setConsentGiven(true);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
    setConsentGiven(true);
  };

  const handleSavePreferences = () => {
    setConsentGiven(true);
    setShowDetails(false);
  };

  // If consent already given, don't show banner
  if (consentGiven) {
    return null;
  }

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cookie Preferences
              </h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking "Accept All", you consent to our use of cookies. You
                can customize your preferences below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 whitespace-nowrap">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Settings
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Cookie Settings
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Learn more about the cookies we use and how to control them.
              </p>
            </div>

            {/* Content */}
            <div className="px-6 py-4 space-y-6 text-left">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Necessary Cookies
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Essential for site functionality, security, and user
                      experience. These cookies cannot be disabled.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="h-5 w-5 text-blue-600 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3 space-y-1">
                  <p>• Session cookies</p>
                  <p>• Security tokens</p>
                  <p>• User preferences</p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Functional Cookies
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Help us remember your choices and improve your experience.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          functional: e.target.checked,
                        })
                      }
                      className="h-5 w-5 text-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3 space-y-1">
                  <p>• Language preferences</p>
                  <p>• Game settings</p>
                  <p>• Accessibility options</p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Analytics Cookies
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Help us understand how users interact with our
                      application.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      className="h-5 w-5 text-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3 space-y-1">
                  <p>• Google Analytics</p>
                  <p>• Page views and interactions</p>
                  <p>• Error tracking</p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Marketing Cookies
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Used to deliver personalized advertisements and content.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          marketing: e.target.checked,
                        })
                      }
                      className="h-5 w-5 text-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-3 space-y-1">
                  <p>• Third-party advertising</p>
                  <p>• Retargeting pixels</p>
                  <p>• Social media tracking</p>
                </div>
              </div>

              {/* GDPR Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Your Privacy Rights
                </h4>
                <p className="text-sm text-blue-800 mb-2">
                  Under GDPR regulation (EU 2016/679), you have the right to:
                </p>
                <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                  <li>Know what personal data we collect</li>
                  <li>Request access to your data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw your consent at any time</li>
                  <li>Lodge a complaint with your local authority</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
