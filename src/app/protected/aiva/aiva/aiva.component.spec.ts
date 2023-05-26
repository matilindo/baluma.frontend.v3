import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AivaComponent } from './aiva.component';

describe('AivaComponent', () => {
  let component: AivaComponent;
  let fixture: ComponentFixture<AivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
