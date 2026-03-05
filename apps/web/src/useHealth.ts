import { useEffect, useState } from "react";
import type { HealthResponse } from "@fullstack-starter/shared";
import { fetchHealth } from "./api";

export function useHealth() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHealth()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
