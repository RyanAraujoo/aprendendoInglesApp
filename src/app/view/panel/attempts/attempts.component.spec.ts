import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { AttemptsComponent } from './attempts.component';

describe('AttempsComponent', () => {
  let component: AttemptsComponent;
  let fixture: ComponentFixture<AttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should check if attemps is number', () => {
    expect(component.attempts).not.toBeNaN();
  })
});
