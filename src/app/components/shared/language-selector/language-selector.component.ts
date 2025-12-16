import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatIconModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  // Languages: English + 4 large EU languages (adjustable)
  languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' }
  ];

  current = 'en';

  constructor(private translate: TranslateService) {
    // Register languages and set default
    this.translate.addLangs(this.languages.map((l) => l.code));
    const browser = this.translate.getBrowserCultureLang?.() || navigator.language || 'es';
    const short = (browser || 'es').split('-')[0];
    const defaultLang = this.languages.find((l) => l.code === short) ? short : 'es';
    this.current = defaultLang;
    this.translate.setDefaultLang('es');
    this.translate.use(this.current);
  }

  change(lang: string) {
    this.current = lang;
    this.translate.use(lang);
  }
}
