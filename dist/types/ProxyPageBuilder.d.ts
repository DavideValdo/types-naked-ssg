import PageBuilder from "./PageBuilder";
import { SlugRecord } from "./ProxyCultureRecordsMap";
type ProxyPageBuilder<T> = (data: SlugRecord<T>) => PageBuilder;
export default ProxyPageBuilder;
//# sourceMappingURL=ProxyPageBuilder.d.ts.map