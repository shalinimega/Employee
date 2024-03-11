import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasstaskComponent } from './classtask.component';

describe('ClasstaskComponent', () => {
  let component: ClasstaskComponent;
  let fixture: ComponentFixture<ClasstaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasstaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
