import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  public titleControls = new FormGroup({
    fontControl: new FormControl(),
    fontSizeControl: new FormControl(),
    fontStyleControl: new FormControl(),
  });
  public backgroundControl = new FormGroup({});
  public borderControl = new FormGroup({
    sizeControl: new FormControl(),
    colorControl: new FormControl(),
  });
  public cellsControl = new FormGroup({
    backgroundControl: new FormControl(),
    textColorControl: new FormControl(),
    fontControl: new FormControl(),
    fontSizeControl: new FormControl(),
    fontStyleControl: new FormControl(),
  });
}
