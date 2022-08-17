import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { TableGenerationBaseService } from '../core/table-generation-base.service';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-bingo-preview',
  templateUrl: './bingo-preview.component.html',
  styleUrls: ['./bingo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BingoPreviewComponent {
  private generatedTable$: Observable<BingoElement[][]>;
  private numberOfEmptyCells$: Subject<number[]> = new Subject();
  private elements$: Observable<BingoElement[]>;

  public get GeneratedTable$(): Observable<BingoElement[][]> {
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
  }
}
