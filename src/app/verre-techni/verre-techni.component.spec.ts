import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreTechniComponent } from './verre-techni.component';

describe('VerreTechniComponent', () => {
  let component: VerreTechniComponent;
  let fixture: ComponentFixture<VerreTechniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreTechniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreTechniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
