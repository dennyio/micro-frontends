import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import * as i0 from "@angular/core";
export class CommonsLibModule {
}
CommonsLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonsLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, declarations: [LoadingComponent,
        MessagesComponent,
        SafeUrlPipe], imports: [CommonModule, MatProgressSpinnerModule, MatIconModule], exports: [LoadingComponent,
        MessagesComponent,
        SafeUrlPipe] });
CommonsLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, providers: [LoadingService, MessagesService], imports: [CommonModule, MatProgressSpinnerModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CommonsLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoadingComponent,
                        MessagesComponent,
                        SafeUrlPipe,
                    ],
                    imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
                    exports: [
                        LoadingComponent,
                        MessagesComponent,
                        SafeUrlPipe,
                    ],
                    providers: [LoadingService, MessagesService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9ucy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9ucy1saWIvc3JjL2xpYi9jb21tb25zLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQWdCcEQsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQVp6QixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFdBQVcsYUFFSCxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxhQUU3RCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFdBQVc7K0dBSUYsZ0JBQWdCLGFBRmhCLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxZQU5sQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsYUFBYTs0RkFRcEQsZ0JBQWdCO2tCQWQ1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxDQUFDO29CQUNoRSxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLFdBQVc7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztpQkFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vbG9hZGluZy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2FmZVVybFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUtdXJsLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgICAgXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICBNZXNzYWdlc0NvbXBvbmVudCxcbiAgICBTYWZlVXJsUGlwZSxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgTWVzc2FnZXNDb21wb25lbnQsXG4gICAgU2FmZVVybFBpcGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW0xvYWRpbmdTZXJ2aWNlLCBNZXNzYWdlc1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25zTGliTW9kdWxlIHt9XG4iXX0=