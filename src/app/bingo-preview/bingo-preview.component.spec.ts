import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoPreviewComponent } from './bingo-preview.component';

describe('BingoPreviewComponent', () => {
  let component: BingoPreviewComponent;
  let fixture: ComponentFixture<BingoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
