import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdittodoComponent } from './modal-edittodo.component';

describe('ModalEdittodoComponent', () => {
  let component: ModalEdittodoComponent;
  let fixture: ComponentFixture<ModalEdittodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEdittodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEdittodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
