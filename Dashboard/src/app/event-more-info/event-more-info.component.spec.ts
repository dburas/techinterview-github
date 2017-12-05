import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMoreInfoComponent } from './event-more-info.component';

describe('EventMoreInfoComponent', () => {
  let component: EventMoreInfoComponent;
  let fixture: ComponentFixture<EventMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
