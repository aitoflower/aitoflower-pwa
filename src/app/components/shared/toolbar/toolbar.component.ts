import { SidenavService } from './../../../services/sidenav.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { AuthService } from '../../../services/auth.service';
import {MatMenuModule} from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from "../logo/logo.component";
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { SidenavButtonComponent } from '../sidenav-button/sidenav-button.component';
import { ThemeOptions } from '../../../interfaces/theme-options.enum';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LanguageSelectorComponent,
    LogoComponent,
    UserMenuComponent,
    TranslateModule,
    SidenavButtonComponent
],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements  OnInit {
    authService = inject(AuthService);
    sidenavService = inject(SidenavService);
    @Input() type: ThemeOptions = ThemeOptions.DEFAULT;
    ngOnInit(): void {}
}
