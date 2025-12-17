import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() type: 'default' | 'b2b' | 'bo' | 'api' = 'default';
  constructor() {}
  ngOnInit() {}
}
