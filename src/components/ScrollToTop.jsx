// src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType(); // PUSH, POP, REPLACE

  useEffect(() => {
    // 戻る（POP）以外のときにのみスクロール
    if (navigationType !== "POP" && location.state?.scrollY === undefined) {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return null;
}
