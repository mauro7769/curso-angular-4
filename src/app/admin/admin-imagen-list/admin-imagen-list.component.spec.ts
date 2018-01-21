import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagenListComponent } from './admin-imagen-list.component';

describe('AdminImagenListComponent', () => {
  let component: AdminImagenListComponent;
  let fixture: ComponentFixture<AdminImagenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImagenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
