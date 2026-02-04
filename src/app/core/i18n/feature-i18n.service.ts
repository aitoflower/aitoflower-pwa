import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { LangChangeEvent } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class FeatureI18nService {

  private http = inject(HttpClient);
  private translate = inject(TranslateService);

  /**
   * Cache: feature -> idiomas cargados
   */
  private loaded = new Map<string, Set<string>>();

  init(feature: string): void {
    const lang = this.translate.currentLang || this.translate.defaultLang;
    this.load(feature, lang);

    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      this.load(feature, e.lang);
    });
  }

  private load(feature: string, lang: string): void {
    const langs = this.loaded.get(feature) ?? new Set<string>();
    if (langs.has(lang)) return;

    this.http
      .get<Record<string, any>>(`assets/${feature}/i18n/${lang}.json`)
      .subscribe({
        next: translations => {
          this.translate.setTranslation(lang, translations, true);
          langs.add(lang);
          this.loaded.set(feature, langs);
        },
        error: () => {
          // Feature puede no tener ese idioma, no rompe
        }
      });
  }
}
