"use client";
import {useEffect, useState} from "react";

export const useWidth = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    if (window) {
      setInnerWidth(window.innerWidth);
    }
  }, []);
  return innerWidth;
};
