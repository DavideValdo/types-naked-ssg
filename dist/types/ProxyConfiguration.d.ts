import type { ProxyCultureRecordsMap } from "./ProxyCultureRecordsMap";
export type ProxyConfiguration<PT> = {
    fetchData: () => Promise<ProxyCultureRecordsMap<PT>>;
    layoutName: string;
};
//# sourceMappingURL=ProxyConfiguration.d.ts.map