import { PageConfiguration } from "./PageConfiguration"
import ProxyEntry, { ProxyEntryPayload } from "./ProxyEntry"

type ProxyConfiguration = {
  data: ProxyEntry
  templateName: string
  localConfigFactory: (data: ProxyEntryPayload) => Partial<PageConfiguration>
}

export default ProxyConfiguration
