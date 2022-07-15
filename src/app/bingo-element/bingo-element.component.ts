import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-bingo-element',
  templateUrl: './bingo-element.component.html',
  styleUrls: ['./bingo-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BingoElementComponent implements OnInit {

  private element: BingoElement = { id: '', value: '' };
  private newValue = '';
  private changeValue = false;

  public get Element(): BingoElement {
    return this.element;
  }

  @Input()
  public set Element(v: BingoElement) {
    this.element = v;
  }

  public get NewValue(): string {
    return this.newValue;
  }

  public set NewValue(v: string) {
    this.newValue = v;
  }

  public get ChangeValue(): boolean {
    return this.changeValue;
  }


  constructor(private readonly elementsService: ElementsBaseService) { }

  ngOnInit(): void {
    this.newValue = this.element.value;
  }

  public editElement(): void {
    this.changeValue = true;
  }

  public saveElement(): void {
    this.changeValue = false;
    this.elementsService.editElement(this.element.id, this.newValue);
  }

  public removeElement(): void {
    this.elementsService.deleteElement(this.element.id);
   }

}
