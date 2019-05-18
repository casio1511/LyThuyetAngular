import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydsComponent } from './quanlyds.component';

describe('QuanlydsComponent', () => {
  let component: QuanlydsComponent;
  let fixture: ComponentFixture<QuanlydsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlydsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
