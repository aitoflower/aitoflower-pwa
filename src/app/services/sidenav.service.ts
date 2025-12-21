import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _isSidenavOpen = signal<boolean>(true);

  get isSidenavOpen() {
    return this._isSidenavOpen.asReadonly();
  }

  toggleSidenav() {
    this._isSidenavOpen.update(_isSidenavOpen => !_isSidenavOpen);
  }

  closeSidenav() {
    this._isSidenavOpen.set(false);
  }

  openSidenav() {
    this._isSidenavOpen.set(true);
  }
}
