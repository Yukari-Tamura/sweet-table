import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetTablesComponent } from './sweet-tables.component';

describe('SweetTablesComponent', () => {
  let component: SweetTablesComponent;
  let fixture: ComponentFixture<SweetTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
