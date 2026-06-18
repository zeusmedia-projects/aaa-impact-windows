"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { useDNI } from "@/hooks/useDNI";

interface PhoneNumberProps {
  className?: string;
  useDadeLine?: boolean;
}

export function PhoneNumber({ className = "", useDadeLine = false }: PhoneNumberProps) {
  const defaultPhone = useDadeLine ? siteConfig.phoneDade : siteConfig.phoneDefault;
  const resolvedPhone = useDNI(defaultPhone);

  // Clean the phone number for raw tel: linking (removes parentheses, spaces, hyphens)
  const cleanedPhone = resolvedPhone.replace(/\D/g, "");

  return (
    <a href={`tel:+1${cleanedPhone}`} className={`hover:text-brand-blue transition-colors duration-200 ${className}`}>
      {resolvedPhone}
    </a>
  );
}

export default PhoneNumber;
