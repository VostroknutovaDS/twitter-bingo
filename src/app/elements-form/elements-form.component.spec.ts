import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsFormComponent } from './elements-form.component';

describe('ElementsFormComponent', () => {
  let component: ElementsFormComponent;
  let fixture: ComponentFixture<ElementsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
