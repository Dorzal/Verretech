import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreFeuilDecoComponent } from './verre-feuil-deco.component';

describe('VerreFeuilDecoComponent', () => {
  let component: VerreFeuilDecoComponent;
  let fixture: ComponentFixture<VerreFeuilDecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreFeuilDecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreFeuilDecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
