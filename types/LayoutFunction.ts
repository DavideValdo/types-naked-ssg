import { LayoutFunctionSignature } from "./LayoutFunctionSignature"

/**
 * @param AP AugmentedParam
 */
export type LayoutFunction<AP = unknown> = (
  params: LayoutFunctionSignature & AP
) => Promise<string>
