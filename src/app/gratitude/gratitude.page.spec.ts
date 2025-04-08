import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GratitudePage } from './gratitude.page';

describe('GratitudePage', () => {
  let component: GratitudePage;
  let fixture: ComponentFixture<GratitudePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
