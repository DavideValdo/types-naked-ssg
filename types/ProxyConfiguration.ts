import { PageConfiguration } from "./PageConfiguration"
import type { ProxyCultureRecordsMap } from "./ProxyCultureRecordsMap"

export type ProxyConfiguration<PT> = {
  fetchData: () => Promise<ProxyCultureRecordsMap<PT>>
  fetchConfig: () => Promise<PageConfiguration>
  layoutName: string
}
