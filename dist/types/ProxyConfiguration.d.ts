import { ProxyCultureRecordsMap } from "./ProxyCultureRecordsMap";
export type ProxyConfiguration<PT> = {
    fetchData: () => Promise<ProxyCultureRecordsMap<PT>>;
    templateName: string;
};
//# sourceMappingURL=ProxyConfiguration.d.ts.map