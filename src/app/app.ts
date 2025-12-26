import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  environmentService = inject(EnvironmentService);
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
