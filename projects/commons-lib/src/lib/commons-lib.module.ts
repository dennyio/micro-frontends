import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
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
})
export class CommonsLibModule {}
