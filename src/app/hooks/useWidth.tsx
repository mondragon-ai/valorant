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

export const useHeight = () => {
  const [innerHeight, setInnerHeight] = useState(0);
  useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight);
    }
  }, []);
  return innerHeight;
};
