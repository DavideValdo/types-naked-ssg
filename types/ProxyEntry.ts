export type ProxyEntryPayload = {
  slug: string
} & Record<string, unknown>

/**
 * The key is the culture code.
 */
type ProxyEntry = Record<string, ProxyEntryPayload>

export default ProxyEntry
