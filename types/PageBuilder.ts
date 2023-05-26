import PagePayload from "./PagePayload"

type PageBuilder<PT = void> = (cultureCode: string) => PagePayload<PT>

export default PageBuilder
