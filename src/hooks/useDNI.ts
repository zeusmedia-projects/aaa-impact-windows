import { useState, useEffect } from "react";

export function useDNI(defaultPhone: string) {
  const [phoneNumber, setPhoneNumber] = useState(defaultPhone);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Check URL parameters for tracking number overrides (e.g. ?ctNumber=954-555-0199)
    const urlParams = new URLSearchParams(window.location.search);
    const urlPhone = urlParams.get("ctNumber");

    if (urlPhone) {
      const formattedUrlPhone = decodeURIComponent(urlPhone);
      setPhoneNumber(formattedUrlPhone);
      try {
        sessionStorage.setItem("__aaa_dni_phone__", formattedUrlPhone);
      } catch (e) {
        // Handle sessionStorage blocked cases (e.g. private browsing)
      }
      return;
    }

    // 2. Check sessionStorage cache
    try {
      const cachedPhone = sessionStorage.getItem("__aaa_dni_phone__");
      if (cachedPhone) {
        setPhoneNumber(cachedPhone);
        return;
      }
    } catch (e) {
      // Ignore
    }

    // 3. Fall back to CallRail / script global variable __aaa_phone__
    const checkGlobalDni = () => {
      const globalPhone = (window as unknown as Record<string, string>).__aaa_phone__;
      if (globalPhone && globalPhone !== phoneNumber) {
        setPhoneNumber(globalPhone);
        return true;
      }
      return false;
    };

    if (checkGlobalDni()) return;

    // Set up polling to catch scripts loaded asynchronously
    const intervalId = setInterval(() => {
      if (checkGlobalDni()) {
        clearInterval(intervalId);
      }
    }, 500);

    // Stop polling after 6 seconds to save CPU cycles
    const timeoutId = setTimeout(() => clearInterval(intervalId), 6000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [phoneNumber]);

  return phoneNumber;
}
export default useDNI;
