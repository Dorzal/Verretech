import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiroitTradiComponent } from './miroit-tradi.component';

describe('MiroitTradiComponent', () => {
  let component: MiroitTradiComponent;
  let fixture: ComponentFixture<MiroitTradiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiroitTradiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiroitTradiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
