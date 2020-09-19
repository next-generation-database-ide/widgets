import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlDatatableComponent } from './ml-datatable.component';

describe('MlDatatableComponent', () => {
  let component: MlDatatableComponent;
  let fixture: ComponentFixture<MlDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
