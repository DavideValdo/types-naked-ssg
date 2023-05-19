import { PageConfiguration } from "./PageConfiguration"
import ProxyEntry, { ProxyEntryPayload } from "./ProxyEntry"

type ProxyConfiguration = {
  fetchData: () => Promise<ProxyEntry>
  templateName: string
  localConfigFactory: (data: ProxyEntryPayload) => Partial<PageConfiguration>
}

export default ProxyConfiguration
