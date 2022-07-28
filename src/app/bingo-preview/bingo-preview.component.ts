import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  public get GeneratedTable$(): Observable<BingoElement[][]> {
    return this.generatedTable$;
  }

  constructor(private readonly tableGenerationService: TableGenerationBaseService) {
    this.generatedTable$ = this.tableGenerationService.getTable();
  }
}
