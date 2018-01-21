import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagenCreateComponent } from './admin-imagen-create.component';

describe('AdminImagenCreateComponent', () => {
  let component: AdminImagenCreateComponent;
  let fixture: ComponentFixture<AdminImagenCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImagenCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
