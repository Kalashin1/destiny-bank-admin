import { useMemo } from "react";

export function useCurrencyFormatter(currency = "USD", locale = "en-US") {
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }),
    [currency, locale]
  );

  return formatter;
}
