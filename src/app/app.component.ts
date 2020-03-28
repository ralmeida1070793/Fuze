import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'fuze-forecast';

  constructor(
    private router: Router) {

  }

  public onGoBack() {
    this.router.navigate(['conversation']);
  }
}
