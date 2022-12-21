import { Component } from '@angular/core';
import { StoreAuthLibService } from '@store-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public auth: StoreAuthLibService) {}

  public logout() {
    this.auth.logout();
  }
}
