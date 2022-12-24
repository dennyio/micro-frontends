import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MessagesService {
    private subject;
    errors$: Observable<string[]>;
    showErrors(...errors: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessagesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessagesService>;
}
