import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { EditFormModes } from '../core/edit-form-modes';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnChanges {
  @ViewChild('contenteditableCell') private cell!: ElementRef;

  private closeEditForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public newValue = '';

  @Input() public element: BingoElement | null = null;
  @Input() public mode!: EditFormModes;

  @Output() public get CloseEditForm(): EventEmitter<boolean> {
    return this.closeEditForm;
  }

  constructor(private readonly elementsService: ElementsBaseService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.element) {
      this.newValue = changes.element.currentValue?.value;
      setTimeout(() => {
        this.cell?.nativeElement.focus();
      }, 0);
    }
  }

  @HostListener('window:keydown.escape')
  private closeOnEscape(): void {
    this.closeForm();
  }

  @HostListener('window:keydown.shift.enter')
  private saveOnShiftEnter(): void {
    this.saveChanges();
  }

  public isEdit(): boolean {
    return this.mode === EditFormModes.Edit;
  }

  public saveChanges(): void {
    if (this.mode === EditFormModes.Add) {
      this.elementsService.addElement(this.newValue);
    }

    if (this.mode === EditFormModes.Edit && this.element !== null) {
      this.elementsService.editElement(this.element.id, this.newValue);
    }

    this.closeForm();
  }

  public onCloseClick(): void {
    this.closeForm();
  }

  public onDeleteClick(): void {
    this.elementsService.deleteElement((this.element as BingoElement).id);
    this.closeForm();
  }

  private closeForm(): void {
    this.closeEditForm.emit(true);
  }
}
