import { PageConfiguration } from "./PageConfiguration"
import ProxyEntry from "./ProxyEntry"

type ProxyConfiguration = {
  data: Array<ProxyEntry>
  templateName: string
  localConfigFactory: (data: ProxyEntry) => Partial<PageConfiguration>
}

export default ProxyConfiguration
