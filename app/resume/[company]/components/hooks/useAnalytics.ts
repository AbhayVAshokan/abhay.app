"use client";

import { useEffect } from "react";
import { Company } from "../../types";

const useAnalytics = (companyData: Company) => {
  const url =
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname + "/analytics"
      : null;
  const payload = {
    Id: companyData.Id,
    title: companyData.title,
    profile_views: Number(companyData.profile_views) + 1,
  };

  useEffect(() => {
    if (!url) return;
    if (process.env.NODE_ENV === "development") return;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
    }).catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
};

export default useAnalytics;
