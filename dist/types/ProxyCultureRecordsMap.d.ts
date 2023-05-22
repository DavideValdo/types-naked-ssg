export type SlugRecord<T> = {
    slug: string;
} & T;
/**
 * The key is the culture code.
 */
type ProxyCultureRecordsMap<T> = Record<string, SlugRecord<T>[]>;
export default ProxyCultureRecordsMap;
//# sourceMappingURL=ProxyCultureRecordsMap.d.ts.map