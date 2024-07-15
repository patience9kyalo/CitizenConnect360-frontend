import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollsComponent } from './add-polls.component';

describe('AddPollsComponent', () => {
  let component: AddPollsComponent;
  let fixture: ComponentFixture<AddPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
