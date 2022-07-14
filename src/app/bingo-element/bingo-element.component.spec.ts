import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoElementComponent } from './bingo-element.component';

describe('BingoElementComponent', () => {
  let component: BingoElementComponent;
  let fixture: ComponentFixture<BingoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
