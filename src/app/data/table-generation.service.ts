import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { TableGenerationBaseService } from '../core/table-generation-base.service';
import { BingoElement } from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class TableGenerationService implements TableGenerationBaseService {
  private table$: Subject<BingoElement[][]> = new Subject<BingoElement[][]>();

  constructor(private readonly elementsService: ElementsBaseService) {
    this.elementsService.getElements().subscribe(elements => {
      this.generateTable(elements);
    });
  }

  public getTable(): Observable<BingoElement[][]> {
    return this.table$;
  }

  private generateTable(elements: BingoElement[]): void {
    //transform elements into table and add to observable
    this.table$.next([]);
  }
}
