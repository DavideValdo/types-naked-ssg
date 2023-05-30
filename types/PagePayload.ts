import { PageConfiguration } from "./PageConfiguration"

export type PagePayload<PT> = {
  html: (proxyItem?: PT) => Promise<string>
  config: PageConfiguration
}
