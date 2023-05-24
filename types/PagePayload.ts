import { PageConfiguration } from "./PageConfiguration"

type PagePayload = {
  html: () => Promise<string>
  config: PageConfiguration
}

export default PagePayload
