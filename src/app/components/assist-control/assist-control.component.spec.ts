import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistControlComponent } from './assist-control.component';

describe('AssistControlComponent', () => {
  let component: AssistControlComponent;
  let fixture: ComponentFixture<AssistControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
