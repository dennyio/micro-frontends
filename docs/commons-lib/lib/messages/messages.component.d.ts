import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.service';
import * as i0 from "@angular/core";
export declare class MessagesComponent implements OnInit {
    messagesService: MessagesService;
    showMessages: boolean;
    errors$: Observable<string[]>;
    constructor(messagesService: MessagesService);
    ngOnInit(): void;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessagesComponent, "messages", never, {}, {}, never, never, false>;
}
