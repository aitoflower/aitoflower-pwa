import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-problem-solution',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    TranslateModule,
],
  templateUrl: './problem-solution.component.html',
  styleUrls: ['./problem-solution.component.css']
})
export class ProblemSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
