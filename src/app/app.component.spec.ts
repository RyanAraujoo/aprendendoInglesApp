import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create the app', () => {
    expect(component).toBeTruthy();
  });

  fit('should to finish the application when outputGame called', () => {
      component.resultApplication('green')
      const finishVariable = component.finishApplication
      const applicationVariable = component.application

      expect(finishVariable).toBeTrue()
      expect(applicationVariable).toBeFalse()
  })

  fit('should to restart application when called', () => {
    component.restartApplication()
    const applicationVariable = component.application
    const finishVariable = component.finishApplication

    expect(applicationVariable).toBeTrue()
    expect(finishVariable).toBeFalsy()
  })
});
