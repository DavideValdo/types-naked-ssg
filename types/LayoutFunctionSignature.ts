import { PageConfiguration } from "./PageConfiguration"
import { SlugRecord } from "./ProxyCultureRecordsMap"

export type LayoutFunctionSignature = {
  config: PageConfiguration
  cultureCode?: string
}

export type PageLayoutFunctionSignature = LayoutFunctionSignature & {
  html: string
}

export type ProxyLayoutFunctionSignature = LayoutFunctionSignature & {
  slugRecord: SlugRecord<unknown>
}
