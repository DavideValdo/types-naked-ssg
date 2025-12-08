import type { PagePayload } from "./PagePayload"

export type PageBuilder<PT = unknown> = (cultureCode: string) => PagePayload<PT>
