import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepHelperPage } from './sleep-helper.page';

describe('SleepHelperPage', () => {
  let component: SleepHelperPage;
  let fixture: ComponentFixture<SleepHelperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepHelperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
