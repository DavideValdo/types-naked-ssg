type Payload = {
  slug: string
} & Record<string, unknown>

/**
 * The key is the culture code.
 */
type ProxyEntry = Record<string, Payload>

export default ProxyEntry
