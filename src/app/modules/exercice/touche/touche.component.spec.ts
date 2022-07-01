import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToucheComponent } from './touche.component';

describe('ToucheComponent', () => {
  let component: ToucheComponent;
  let fixture: ComponentFixture<ToucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToucheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
