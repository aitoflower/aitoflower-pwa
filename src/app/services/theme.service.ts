import { Injectable, signal } from "@angular/core";
import { ThemeOptions } from "../interfaces/theme-options.enum";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _selectedTheme = signal<ThemeOptions>(ThemeOptions.DEFAULT);

  get selectedTheme() {
    return this._selectedTheme.asReadonly();
  }

  toggleTheme(theme: ThemeOptions) {
    document.body.classList.remove(this._selectedTheme().concat('-theme'));
    document.body.classList.add(theme.concat('-theme'));
    this._selectedTheme.set(theme);
  }
}
