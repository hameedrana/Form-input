import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInputComponent } from './table-input.component';

describe('TableInputComponent', () => {
  let component: TableInputComponent;
  let fixture: ComponentFixture<TableInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableInputComponent]
    });
    fixture = TestBed.createComponent(TableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
