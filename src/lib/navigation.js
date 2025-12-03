// Migration utilities for converting React Router to Next.js
// This file provides compatibility wrappers to ease the transition

"use client";

import { useRouter as useNextRouter, usePathname, useSearchParams } from 'next/navigation';
import NextLink from 'next/link';

// Wrapper for useNavigate
export function useNavigate() {
  const router = useNextRouter();
  
  return (to, options = {}) => {
    if (typeof to === 'number') {
      // Handle back/forward navigation
      if (to === -1) {
        router.back();
      } else if (to === 1) {
        router.forward();
      }
    } else {
      // Handle route navigation
      if (options.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    }
  };
}

// Wrapper for useLocation
export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  return {
    pathname,
    search: searchParams.toString() ? `?${searchParams.toString()}` : '',
    state: {},
    hash: typeof window !== 'undefined' ? window.location.hash : '',
  };
}

// Wrapper for Link component
export function Link({ to, children, ...props }) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}

// Export useRouter for other needs
export { useNextRouter as useRouter, usePathname, useSearchParams };
