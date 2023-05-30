export type SlugRecord<T> = {
    slug: string;
} & T;
/**
 * The key is the culture code.
 */
export type ProxyCultureRecordsMap<T> = Record<string, {
    data: SlugRecord<T>[];
    directory: string;
}>;
//# sourceMappingURL=ProxyCultureRecordsMap.d.ts.map