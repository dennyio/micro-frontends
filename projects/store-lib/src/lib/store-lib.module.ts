import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsLibModule } from '@commons-lib';
import { StoreLibComponent } from './store-lib.component';

@NgModule({
  declarations: [StoreLibComponent],
  imports: [CommonModule, CommonsLibModule],
  exports: [StoreLibComponent],
})
export class StoreLibModule {}
