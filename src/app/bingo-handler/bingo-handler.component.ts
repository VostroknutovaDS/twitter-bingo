import { Component, EventEmitter, Output } from '@angular/core';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-bingo-handler',
  templateUrl: './bingo-handler.component.html',
  styleUrls: ['./bingo-handler.component.scss']
})
export class BingoHandlerComponent {
  private openEditForm: EventEmitter<BingoElement> = new EventEmitter<BingoElement>();

  @Output() public get OpenEditForm(): EventEmitter<BingoElement> {
    return this.openEditForm;
  }

  public OpenEditFormEvent(element: BingoElement): void {
    this.openEditForm.emit(element);
  }

}
