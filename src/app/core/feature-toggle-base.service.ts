import { Injectable } from "@angular/core";

/**
 * The service stores feature toggle settings and enables checking whether they are currently turned on
 */
@Injectable({
    providedIn: 'root'
})
export abstract class FeatureToggleServiceBase {
    public abstract isFeatureOn(feature: string): boolean;
    public abstract loadFeatureToggles(): Promise<Record<string, boolean>>;
}