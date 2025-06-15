"use client";

import { useEffect } from "react";
import { Company } from "../../types";

const useAnalytics = (companyData: Company) => {
  const url =
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname + "/analytics"
      : null;

  useEffect(() => {
    if (!url) return;
    if (process.env.NODE_ENV === "development") return;

    fetch(url, {
      method: "POST",
      credentials: "include",
    }).catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
};

export default useAnalytics;
