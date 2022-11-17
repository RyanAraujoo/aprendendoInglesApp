import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttempsComponent } from './attempts.component';

describe('AttempsComponent', () => {
  let component: AttempsComponent;
  let fixture: ComponentFixture<AttempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
