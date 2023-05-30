import { LayoutFunctionSignature } from "./LayoutFunctionSignature"

/**
 * @param AP AugmentedParam
 */
export type LayoutFunction<AP = void> = (
  params: LayoutFunctionSignature & AP
) => string
