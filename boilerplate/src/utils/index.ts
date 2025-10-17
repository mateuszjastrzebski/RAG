import { clsx, type ClassValue } from 'clsx';

// Funkcja do łączenia klas CSS
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Funkcja do formatowania daty
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Funkcja do formatowania czasu
export function formatTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleTimeString('pl-PL', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Funkcja do walidacji emaila
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Funkcja do generowania losowego ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Funkcja do debounce
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Funkcja do formatowania liczby
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('pl-PL').format(num);
}

// Funkcja do formatowania waluty
export function formatCurrency(amount: number, currency = 'PLN'): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency,
  }).format(amount);
}
