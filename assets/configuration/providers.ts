import { Provider } from "@angular/core";
import { ElementsBaseService } from "src/app/core/elements-base.service";
import { TableGenerationBaseService } from "src/app/core/table-generation-base.service";
import { ElementsService } from "src/app/data/elements.service";
import { TableGenerationService } from "src/app/data/table-generation.service";

export const DATA_PROVIDERS: Provider[] = [
    {
        provide: ElementsBaseService,
        useClass: ElementsService
    },
    {
        provide: TableGenerationBaseService,
        useClass: TableGenerationService
    }
];