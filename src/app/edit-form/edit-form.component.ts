import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EditFormModes } from '../core/edit-form-modes';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnChanges {
  private closeEditForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public newValue = '';

  @Input() public element: BingoElement | null = null;
  @Input() public mode!: EditFormModes;


  @Output() public get CloseEditForm(): EventEmitter<boolean> {
    return this.closeEditForm;
  }

  constructor(private readonly elementsService: ElementsBaseService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.element) {
      this.newValue = changes.element.currentValue?.value;
    }
  }

  public saveChanges(): void {
    if (this.mode === EditFormModes.Add) {
      this.elementsService.addElement(this.newValue);
    }

    if (this.mode === EditFormModes.Edit && this.element !== null) {
      this.elementsService.editElement(this.element.id, this.newValue);
    }

    this.closeEditForm.emit(true);
  }

  public onCloseClick(): void {
    this.closeEditForm.emit(true);
  }

}
