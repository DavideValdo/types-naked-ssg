import type { ProxyConfiguration } from "./ProxyConfiguration"

export type SiteConfiguration = {
  cultures: string[]
  proxies?: ProxyConfiguration<unknown>[]
}
