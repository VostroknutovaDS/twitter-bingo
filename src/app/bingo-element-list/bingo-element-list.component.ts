import { Component, ElementRef, ViewChild } from '@angular/core';
import { BingoElementComponent } from '../bingo-element/bingo-element.component';

@Component({
  selector: 'app-bingo-element-list',
  templateUrl: './bingo-element-list.component.html',
  styleUrls: ['./bingo-element-list.component.scss']
})
export class BingoElementListComponent extends BingoElementComponent {
  @ViewChild('editInput') private editInput!: ElementRef;

  public editElement() {
    super.editElement();
    setTimeout(() => { this.editInput.nativeElement.focus(); });
  }
}
