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

  const formatTimestamp = (timestamp: number) => {
    return formatter.format(new Date(timestamp));
  };

  return formatTimestamp;
}

export default useDateFormatter;
