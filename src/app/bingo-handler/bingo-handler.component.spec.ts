import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoHandlerComponent } from './bingo-handler.component';

describe('BingoHandlerComponent', () => {
  let component: BingoHandlerComponent;
  let fixture: ComponentFixture<BingoHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
