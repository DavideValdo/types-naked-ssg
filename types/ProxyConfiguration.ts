import ProxyCultureRecordsMap from "./ProxyCultureRecordsMap"

type ProxyConfiguration<PT> = {
  fetchData: () => Promise<ProxyCultureRecordsMap<PT>>
  templateName: string
}

export default ProxyConfiguration
