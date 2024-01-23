import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

/**
 * The component that displays the table editor menu
 */
@Component({
  selector: 'app-table-editor',
  templateUrl: 'table-editor.component.html',
  styleUrls: ['table-editor.component.scss'],
})
export class TableEditorComponent {
  /*TODO
  Table should have these configurations enabled:
  1) Background: set your own image or use samples(colors, images)
  2) Border: size, color, style?
  3) Title style: font, font size, bold/italic
  4) Cells: background color, text color, font, font size, bold/italic
  */

  public titleControls = new UntypedFormGroup({
    fontControl: new UntypedFormControl(),
    fontSizeControl: new UntypedFormControl(),
    fontStyleControl: new UntypedFormControl(),
  });
  public backgroundControl = new UntypedFormGroup({});
  public borderControl = new UntypedFormGroup({
    sizeControl: new UntypedFormControl(),
    colorControl: new UntypedFormControl(),
  });
  public cellsControl = new UntypedFormGroup({
    backgroundControl: new UntypedFormControl(),
    textColorControl: new UntypedFormControl(),
    fontControl: new UntypedFormControl(),
    fontSizeControl: new UntypedFormControl(),
    fontStyleControl: new UntypedFormControl(),
  });
}
