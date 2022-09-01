import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditFormModes } from '../core/edit-form-modes';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  private closeEditForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public element!: BingoElement;
  @Input() public mode!: EditFormModes;


  @Output() public get CloseEditForm(): EventEmitter<boolean> {
    return this.closeEditForm;
  }

  constructor(private readonly elementsService: ElementsBaseService) { }

  public saveChanges(): void {
    if (this.mode === EditFormModes.Add) {
      this.elementsService.addElement(this.element.value);
    }

    if (this.mode === EditFormModes.Edit) {
      this.elementsService.editElement(this.element.id, this.element.value);
    }

    this.closeEditForm.emit(true);
  }

  public onCloseClick(): void {
    this.closeEditForm.emit(true);
  }

}
