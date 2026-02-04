import { Injectable } from '@angular/core';
import { Roles } from '../model/enums/roles.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private readonly baseUrl: string;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {
    if (this.environmentService.currentEnv === 'LOCAL') {
      this.baseUrl = 'http://localhost:8080';
    } else {
      this.baseUrl = 'https://aitoflower-core-api-746248683972.europe-southwest1.run.app';
    }
  }

  getRoles(uid: string): Observable<Roles[]> {
    const endpoint = `${this.baseUrl}/v1/admin/roles/${uid}`;
    return this.http.get<Roles[]>(endpoint);
  }

  assignRoles(payload: { uid: string; roles: Roles[] }): Observable<void> {
    const endpoint = `${this.baseUrl}/v1/admin/roles`;
    return this.http.post<void>(endpoint, payload);
  }
}
