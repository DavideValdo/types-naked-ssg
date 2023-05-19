import { PageConfiguration } from "./PageConfiguration"

type ProxyConfiguration = {
  data: Array<unknown>
  templateName: string
  localConfigFactory: (data: unknown) => Partial<PageConfiguration>
}

export default ProxyConfiguration
