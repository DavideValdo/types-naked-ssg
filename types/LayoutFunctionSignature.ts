import { PageConfiguration } from "./PageConfiguration"

export type LayoutFunctionSignature = {
  html: string
  localConfig: PageConfiguration
  cultureCode?: string
}
