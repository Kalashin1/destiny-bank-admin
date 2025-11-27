import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Beneficiary } from "../../../../types";

export const SendMoneyContext = createContext<Partial<{
  selectedBeneficiary: Beneficiary|null,
  updateSelectedBeneficiary: Dispatch<SetStateAction<Beneficiary|null>>
}>>({})