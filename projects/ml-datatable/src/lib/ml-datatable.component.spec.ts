import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLDatatableComponent } from './ml-datatable.component';

describe('MlDatatableComponent', () => {
  let component: MLDatatableComponent;
  let fixture: ComponentFixture<MLDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
