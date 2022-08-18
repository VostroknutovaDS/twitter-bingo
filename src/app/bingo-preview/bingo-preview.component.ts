import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ElementsBaseService } from '../core/elements-base.service';
import { TableGenerationBaseService } from '../core/table-generation-base.service';
import { BingoElement, Table } from '../core/types';

@Component({
  selector: 'app-bingo-preview',
  templateUrl: './bingo-preview.component.html',
  styleUrls: ['./bingo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BingoPreviewComponent implements OnDestroy {
  private generatedTable$: Observable<Table>;
  private numberOfEmptyCells$: Subject<number[]> = new Subject();
  private elements$: Observable<BingoElement[]>;
  private destroy$: Subject<boolean> = new Subject();

  public get GeneratedTable$(): Observable<Table> {
    return this.generatedTable$;
  }

  public get Elements$(): Observable<BingoElement[]> {
    return this.elements$;
  }

  public get NumberOfEmptyCells$(): Observable<number[]> {
    return this.numberOfEmptyCells$;
  }

  constructor(private readonly elementsService: ElementsBaseService, private readonly tableGenerationService: TableGenerationBaseService,) {
    this.generatedTable$ = this.tableGenerationService.getTable();
    this.elements$ = this.elementsService.getElements();

    this.generatedTable$.pipe(takeUntil(this.destroy$)).subscribe(table => {
      this.numberOfEmptyCells$.next(Array(table.numberOfEmptyCells));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
