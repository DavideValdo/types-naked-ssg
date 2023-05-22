import ProxyConfiguration from "./ProxyConfiguration"

export type SiteConfiguration<T> = {
  cultures: string[]
  proxies?: ProxyConfiguration<T>[]
}
