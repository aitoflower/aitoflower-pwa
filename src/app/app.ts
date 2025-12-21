import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AIToFlower');

  constructor(private translate: TranslateService,
  private router: Router) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');

    this.router.events.subscribe(() => {
      if (!this.translate.currentLang) {
        this.translate.use('es');
      }
    });
  }
}
