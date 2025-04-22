import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoodCheckerPage } from './mood-checker.page';

describe('MoodCheckerPage', () => {
  let component: MoodCheckerPage;
  let fixture: ComponentFixture<MoodCheckerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodCheckerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
