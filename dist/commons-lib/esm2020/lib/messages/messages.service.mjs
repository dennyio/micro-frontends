import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class MessagesService {
    constructor() {
        this.subject = new BehaviorSubject([]);
        this.errors$ = this.subject
            .asObservable()
            .pipe(filter((messages) => messages && messages.length > 0));
    }
    showErrors(...errors) {
        this.subject.next(errors);
    }
}
MessagesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MessagesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MessagesService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbnMtbGliL3NyYy9saWIvbWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUd4QyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVVLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVyxFQUFFLENBQUMsQ0FBQztRQUVwRCxZQUFPLEdBQXlCLElBQUksQ0FBQyxPQUFPO2FBQ3pDLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FLaEU7SUFIQyxVQUFVLENBQUMsR0FBRyxNQUFnQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs2R0FUVSxlQUFlO2lIQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4oW10pO1xuXG4gIGVycm9ycyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zdWJqZWN0XG4gICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgLnBpcGUoZmlsdGVyKChtZXNzYWdlcykgPT4gbWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCkpO1xuXG4gIHNob3dFcnJvcnMoLi4uZXJyb3JzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KGVycm9ycyk7XG4gIH1cbn1cbiJdfQ==