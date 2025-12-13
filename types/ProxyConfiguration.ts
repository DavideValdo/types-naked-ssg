import { PageConfiguration } from "./PageConfiguration"
import type {
  ProxyCultureRecordsMap,
  SlugRecord,
} from "./ProxyCultureRecordsMap"

export type ProxyConfiguration<PT> = {
  fetchData: () => Promise<ProxyCultureRecordsMap<PT>>
  fetchConfig: (record?: SlugRecord<PT>) => Promise<PageConfiguration>
  layoutName: string
}
