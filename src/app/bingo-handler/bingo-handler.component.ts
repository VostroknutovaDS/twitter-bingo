import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { MAX_NUMBER_OF_ELEMENTS } from 'src/assets/configuration/constants';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';

/**
 * Component that displays side data connected to bingo
 */
@Component({
  selector: 'app-bingo-handler',
  templateUrl: './bingo-handler.component.html',
  styleUrls: ['./bingo-handler.component.scss']
})
export class BingoHandlerComponent {
  private openEditForm: EventEmitter<BingoElement> = new EventEmitter<BingoElement>();
  private elements$: Observable<BingoElement[]>;
  public readonly maxNumberOfElements: number = MAX_NUMBER_OF_ELEMENTS;

  @Output() public get OpenEditForm(): EventEmitter<BingoElement> {
    return this.openEditForm;
  }

  public get Elements$(): Observable<BingoElement[]> {
    return this.elements$;
  }

  constructor(private readonly elementsService: ElementsBaseService) {
    this.elements$ = this.elementsService.getElements();
  }

  public OpenEditFormEvent(element: BingoElement): void {
    this.openEditForm.emit(element);
  }

}
