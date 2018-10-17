import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTripsComponent } from './featured-trips.component';

describe('FeaturedTripsComponent', () => {
  let component: FeaturedTripsComponent;
  let fixture: ComponentFixture<FeaturedTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
