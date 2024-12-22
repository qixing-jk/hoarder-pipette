import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ParseSelector } from 'typed-query-selector/parser';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function $<S extends string>(
  selector: S,
  context: Element | Document = document,
): ParseSelector<S, Element> | null {
  return context.querySelector(selector);
}

export function $$<S extends string>(
  selector: S,
  context: Element | Document = document,
): NodeListOf<ParseSelector<S>> | null {
  return context.querySelectorAll(selector);
}
