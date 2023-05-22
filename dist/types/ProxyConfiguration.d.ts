import ProxyCultureRecordsMap from "./ProxyCultureRecordsMap";
type ProxyConfiguration<T> = {
    fetchData: () => Promise<ProxyCultureRecordsMap<T>>;
    templateName: string;
};
export default ProxyConfiguration;
//# sourceMappingURL=ProxyConfiguration.d.ts.map