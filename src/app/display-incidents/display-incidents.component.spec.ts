import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIncidentsComponent } from './display-incidents.component';

describe('DisplayIncidentsComponent', () => {
  let component: DisplayIncidentsComponent;
  let fixture: ComponentFixture<DisplayIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayIncidentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
