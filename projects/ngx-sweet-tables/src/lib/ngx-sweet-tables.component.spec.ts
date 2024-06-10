import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSweetTablesComponent } from './ngx-sweet-tables.component';

describe('NgxSweetTablesComponent', () => {
  let component: NgxSweetTablesComponent;
  let fixture: ComponentFixture<NgxSweetTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSweetTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSweetTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
