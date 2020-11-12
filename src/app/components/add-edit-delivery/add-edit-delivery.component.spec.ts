import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeliveryComponent } from './add-edit-delivery.component';

describe('AddEditDeliveryComponent', () => {
  let component: AddEditDeliveryComponent;
  let fixture: ComponentFixture<AddEditDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
