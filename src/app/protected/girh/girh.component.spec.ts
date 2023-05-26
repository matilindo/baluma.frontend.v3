import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirhComponent } from './girh.component';

describe('GirhComponent', () => {
  let component: GirhComponent;
  let fixture: ComponentFixture<GirhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
