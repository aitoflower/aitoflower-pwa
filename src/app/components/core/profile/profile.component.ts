import { CommonModule, JsonPipe } from '@angular/common';
import { AuthService } from './../../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { TestApiService } from '../../../services/testApi.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [
    // JsonPipe,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ProfileComponent implements OnInit {

  authService = inject(AuthService);
  testApiService = inject(TestApiService);
  user = this.authService.user();

  ngOnInit() {
  }

  test() {
    this.testApiService.ping().subscribe(res => {
      console.log('Response:', res);
    });
  }
}
