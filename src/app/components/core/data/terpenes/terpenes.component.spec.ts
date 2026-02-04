/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TerpenesComponent } from './terpenes.component';

describe('TerpenesComponent', () => {
  let component: TerpenesComponent;
  let fixture: ComponentFixture<TerpenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerpenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerpenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
