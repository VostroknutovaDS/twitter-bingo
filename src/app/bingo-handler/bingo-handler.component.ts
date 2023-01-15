import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditFormModes } from '../core/edit-form-modes';

@Component({
  selector: 'app-bingo-handler',
  templateUrl: './bingo-handler.component.html',
  styleUrls: ['./bingo-handler.component.scss']
})
export class BingoHandlerComponent {
  private openEditForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() public get OpenEditForm(): EventEmitter<boolean> {
    return this.openEditForm;
  }

  public OpenEditFormEvent(): void {
    this.openEditForm.emit(true);
  }

}
