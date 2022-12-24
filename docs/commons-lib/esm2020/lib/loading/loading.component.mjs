import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./loading.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/progress-spinner";
export class LoadingComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    ngOnInit() { }
}
LoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingComponent, deps: [{ token: i1.LoadingService }], target: i0.ɵɵFactoryTarget.Component });
LoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LoadingComponent, selector: "loading", ngImport: i0, template: "<div class=\"spinner-container\" *ngIf=\"loadingService.loading$ | async\">\n  <mat-spinner></mat-spinner>\n</div>\n", styles: [".spinner-container{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.32);z-index:20000}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading', template: "<div class=\"spinner-container\" *ngIf=\"loadingService.loading$ | async\">\n  <mat-spinner></mat-spinner>\n</div>\n", styles: [".spinner-container{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.32);z-index:20000}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.LoadingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25zLWxpYi9zcmMvbGliL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25zLWxpYi9zcmMvbGliL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFckQsUUFBUSxLQUFVLENBQUM7OzhHQUhSLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLCtDQ1I3QixzSEFHQTs0RkRLYSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vbG9hZGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9hZGluZ1NlcnZpY2U6IExvYWRpbmdTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJzcGlubmVyLWNvbnRhaW5lclwiICpuZ0lmPVwibG9hZGluZ1NlcnZpY2UubG9hZGluZyQgfCBhc3luY1wiPlxuICA8bWF0LXNwaW5uZXI+PC9tYXQtc3Bpbm5lcj5cbjwvZGl2PlxuIl19