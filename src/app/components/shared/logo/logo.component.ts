import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeOptions } from '../../../interfaces/theme-options.enum';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() type: ThemeOptions = ThemeOptions.DEFAULT;

}
