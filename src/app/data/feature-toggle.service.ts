import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { FeatureToggleServiceBase } from "../core/feature-toggle-base.service";

/**
 * The service stores feature toggle settings and enables checking whether they are currently turned on
 */
@Injectable({
    providedIn: 'root'
})
export class FeatureToggleService implements FeatureToggleServiceBase {
    private featureToggles: Record<string, boolean> = {};

    constructor(private readonly httpClient: HttpClient) { }

    public loadFeatureToggles(): Promise<Record<string, boolean>> {
        return this.httpClient.get<Record<string, boolean>>('assets/configuration/feature-toggles.json')
            .pipe(tap(data => {
                this.featureToggles = data;
            })).toPromise();
    }

    public isFeatureOn(feature: string): boolean {
        return this.featureToggles[feature];
    }
}