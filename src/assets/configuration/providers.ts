import { Provider } from "@angular/core";
import { ElementsBaseService } from "src/app/core/elements-base.service";
import { ElementsService } from "src/app/data/elements.service";

export const DATA_PROVIDERS: Provider[] = [
    {
        provide: ElementsBaseService,
        useClass: ElementsService
    }
];