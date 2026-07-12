import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanWhatsAppNumber(num: string | undefined): string {
  if (!num) return '';
  return num.replace(/\D/g, '');
}
