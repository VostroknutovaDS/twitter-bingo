import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  Output,
} from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

import { ElementsBaseService } from '../core/elements-base.service';
import { TableGenerationBaseService } from '../core/table-generation-base.service';
import { BingoElement, Table } from '../core/types';
import { MOCK_DATA } from 'src/assets/configuration/mock-data';
import { FeatureToggleServiceBase } from '../core/feature-toggle-base.service';

/**
 * The component that displays only bingo preview(table)
 */
@Component({
  selector: 'app-bingo-preview',
  templateUrl: './bingo-preview.component.html',
  styleUrls: ['./bingo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoPreviewComponent implements OnDestroy {
  private generatedTable$: Observable<Table>;
  private numberOfEmptyCells$: ReplaySubject<number[]> = new ReplaySubject();
  private elements$: Observable<BingoElement[]>;
  private destroy$: Subject<boolean> = new Subject();
  private openEditForm: EventEmitter<BingoElement> =
    new EventEmitter<BingoElement>();

  public get GeneratedTable$(): Observable<Table> {
    return this.generatedTable$;
  }

  public get Elements$(): Observable<BingoElement[]> {
    return this.elements$;
  }

  public get NumberOfEmptyCells$(): Observable<number[]> {
    return this.numberOfEmptyCells$;
  }

  @Output() public get OpenEditForm(): EventEmitter<BingoElement> {
    return this.openEditForm;
  }

  constructor(
    private readonly elementsService: ElementsBaseService,
    private readonly tableGenerationService: TableGenerationBaseService,
    private readonly featureToggleService: FeatureToggleServiceBase
  ) {
    //set mock table for testing
    if (this.featureToggleService.isFeatureOn('mock-table')) {
      for (let i = 0; i < MOCK_DATA.length; i++) {
        this.elementsService.addElement(MOCK_DATA[i]);
      }
    }

    /*
    TODO
    Remove table generation. It's not necessary for a bingo made with grids.
    Next functions must be implemeted:
    - get size of table x oriented side, but without table
    - get amount of empty cells without generated table
     */
    this.generatedTable$ = this.tableGenerationService.getTable();
    this.elements$ = this.elementsService.getElements();

    this.generatedTable$.pipe(takeUntil(this.destroy$)).subscribe((table) => {
      this.numberOfEmptyCells$.next(Array(table.numberOfEmptyCells));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public onEditClick(element: BingoElement): void {
    this.openEditForm.emit(element);
  }
}
