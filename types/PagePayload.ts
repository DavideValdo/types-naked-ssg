import { PageConfiguration } from "./PageConfiguration"

export type PagePayload<PT> = {
  getHTML: (proxyItem?: PT) => Promise<string>
  getConfig: (proxyItem?: PT) => Promise<PageConfiguration>
}
