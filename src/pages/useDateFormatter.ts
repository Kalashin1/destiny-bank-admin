import { useMemo } from "react";

// Custom hook for date formatting
function useDateFormatter() {
  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }, []);

  const shortFormatter = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
    });
  }, []);

  const formatTimestamp = (
    timestamp: number,
    format: "default" | "short" = "default"
  ) => {
    if (format === "short") {
      return shortFormatter.format(new Date(timestamp));
    }
    return formatter.format(new Date(timestamp));
  };

  return formatTimestamp;
}

export default useDateFormatter;
