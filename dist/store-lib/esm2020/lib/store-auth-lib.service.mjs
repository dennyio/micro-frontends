import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const AUTH_DATA = 'auth_data';
export class StoreAuthLibService {
    constructor(http) {
        this.http = http;
        this.subject = new BehaviorSubject(null);
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
        const user = localStorage.getItem(AUTH_DATA);
        if (user) {
            this.subject.next(JSON.parse(user));
        }
    }
    login(email, password) {
        return this.http.post('/api/login', { email, password }).pipe(tap((user) => {
            this.subject.next(user);
            localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }), shareReplay());
    }
    logout() {
        this.subject.next(null);
        localStorage.removeItem(AUTH_DATA);
    }
}
StoreAuthLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreAuthLibService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
StoreAuthLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreAuthLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StoreAuthLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtYXV0aC1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlLWxpYi9zcmMvbGliL3N0b3JlLWF1dGgtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBYyxXQUFXLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHMUUsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBSzlCLE1BQU0sT0FBTyxtQkFBbUI7SUFROUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVA1QixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWMsSUFBSSxDQUFDLENBQUM7UUFFbEQsVUFBSyxHQUE0QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTWxFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXhFLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDakUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxFQUFFLENBQ2QsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOztpSEFqQ1UsbUJBQW1CO3FIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWFwLCBPYnNlcnZhYmxlLCBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5cbmNvbnN0IEFVVEhfREFUQSA9ICdhdXRoX2RhdGEnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVBdXRoTGliU2VydmljZSB7XG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlciB8IG51bGw+KG51bGwpO1xuXG4gIHB1YmxpYyB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyIHwgbnVsbD4gPSB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4kITogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHVibGljIGlzTG9nZ2VkT3V0JCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5pc0xvZ2dlZEluJCA9IHRoaXMudXNlciQucGlwZShtYXAoKHVzZXIpID0+ICEhdXNlcikpO1xuXG4gICAgdGhpcy5pc0xvZ2dlZE91dCQgPSB0aGlzLmlzTG9nZ2VkSW4kLnBpcGUobWFwKChsb2dnZWRJbikgPT4gIWxvZ2dlZEluKSk7XG5cbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQVVUSF9EQVRBKTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICB0aGlzLnN1YmplY3QubmV4dChKU09OLnBhcnNlKHVzZXIpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPignL2FwaS9sb2dpbicsIHsgZW1haWwsIHBhc3N3b3JkIH0pLnBpcGUoXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodXNlcik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVEhfREFUQSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSgpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQobnVsbCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVVUSF9EQVRBKTtcbiAgfVxufVxuIl19