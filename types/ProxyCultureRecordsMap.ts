export type SlugRecord<T> = {
  slug: string
} & T

/**
 * The key is the culture code.
 */
type ProxyCultureRecordsMap<T> = Record<
  string,
  { data: SlugRecord<T>[]; directory: string }
>

export default ProxyCultureRecordsMap
