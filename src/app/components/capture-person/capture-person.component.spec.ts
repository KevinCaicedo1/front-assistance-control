import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePersonComponent } from './capture-person.component';

describe('CapturePersonComponent', () => {
  let component: CapturePersonComponent;
  let fixture: ComponentFixture<CapturePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
