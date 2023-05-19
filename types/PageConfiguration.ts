export type PageConfiguration = {
  skipForCultures?: string[]
  title?: string
  scripts?: {
    path: ""
    asynchronicity?: "async" | "defer"
  }[]
  styles?: string[]
}
