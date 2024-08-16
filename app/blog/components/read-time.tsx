"use client";

import { useEffect, useState } from "react";

const WORDS_PER_MINUTE = 200;

const ReadTime = () => {
  const [minutes, setMinutes] = useState<number | '  '>("  ");

  useEffect(() => {
    const length = document.querySelector(".blog")?.textContent?.split(/\s/).length ?? 0;
    setMinutes(Math.round(length / WORDS_PER_MINUTE))
  }, []);

  return <span className="whitespace-pre-wrap"> • {minutes} minute read</span>;
};

export default ReadTime;
