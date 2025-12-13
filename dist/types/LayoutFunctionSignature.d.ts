import { PageConfiguration } from "./PageConfiguration";
import { SlugRecord } from "./ProxyCultureRecordsMap";
export type LayoutFunctionSignature = {
    config: PageConfiguration;
    cultureCode?: string;
} & ({
    type: "page";
    html: string;
} | {
    type: "proxy";
    slugRecord: SlugRecord<unknown>;
});
//# sourceMappingURL=LayoutFunctionSignature.d.ts.map