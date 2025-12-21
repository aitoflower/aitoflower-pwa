import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeOptions } from '../../../interfaces/theme-options.enum';

@Component({
  selector: 'app-sidenav-list',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule,
        RouterLink,
    ],
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Input() type: ThemeOptions = ThemeOptions.DEFAULT;

  constructor() { }

  ngOnInit() {
  }

}
