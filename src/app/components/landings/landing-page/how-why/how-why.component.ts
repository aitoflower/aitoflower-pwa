import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-how-why',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    MatIconModule,
],
  templateUrl: './how-why.component.html',
  styleUrls: ['./how-why.component.css']
})
export class HowWhyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
