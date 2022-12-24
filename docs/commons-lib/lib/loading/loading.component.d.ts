import { OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import * as i0 from "@angular/core";
export declare class LoadingComponent implements OnInit {
    loadingService: LoadingService;
    constructor(loadingService: LoadingService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingComponent, "loading", never, {}, {}, never, never, false>;
}
