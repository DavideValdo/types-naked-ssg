import { PageConfiguration } from "./PageConfiguration"

export type LayoutFunctionSignature = {
  html: string
  config: PageConfiguration
  cultureCode?: string
}
