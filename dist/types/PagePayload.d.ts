import { PageConfiguration } from "./PageConfiguration";
type PagePayload<PT> = {
    html: (proxyItem?: PT) => Promise<string>;
    config: PageConfiguration;
};
export default PagePayload;
//# sourceMappingURL=PagePayload.d.ts.map