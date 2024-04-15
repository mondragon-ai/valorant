"use client";
export function saveItem(key: any, value: any) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function getItem(key: any) {
  if (typeof window !== "undefined") {
    const got = sessionStorage.getItem(key);
    return JSON.parse(got as string);
  }
}
