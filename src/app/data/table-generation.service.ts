import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { MAX_NUMBER_OF_ELEMENTS } from 'src/assets/configuration/constants';
import { ElementsBaseService } from '../core/elements-base.service';
import { TableGenerationBaseService } from '../core/table-generation-base.service';
import { BingoElement, Table } from '../core/types';

/**
 * The service generates two-dimensional array from bingo elements list
 */
@Injectable({
  providedIn: 'root',
})
export class TableGenerationService implements TableGenerationBaseService {
  private table$: ReplaySubject<Table> = new ReplaySubject<Table>(1);
  private table: BingoElement[][] = [];

  constructor(private readonly elementsService: ElementsBaseService) {
    this.elementsService.getElements().subscribe((elements) => {
      this.generateTable(elements);
    });
  }

  public getTable(): Observable<Table> {
    return this.table$;
  }

  private generateTable(elements: BingoElement[]): void {
    if (elements.length > MAX_NUMBER_OF_ELEMENTS) {
      return;
    }

    const rows: number = this.findRowsNumber(elements);
    const newElements = this.addEmptyCells(elements, rows);

    this.table = [];
    for (let i = 0; i < rows; i++) {
      this.table.push(newElements.slice(rows * i, rows * (i + 1)));
    }

    this.table$.next({
      table: this.table,
      numberOfEmptyCells: rows * rows - elements.length,
    });
  }

  private findRowsNumber(elements: Array<unknown>): number {
    return Math.ceil(Math.sqrt(elements.length));
  }

  private addEmptyCells(
    elements: BingoElement[],
    rows: number
  ): BingoElement[] {
    const emptyCells: BingoElement[] = Array(
      rows * rows - elements.length
    ).fill(<BingoElement>{ value: '', isGenerated: true });
    return elements.concat(emptyCells);
  }
}
