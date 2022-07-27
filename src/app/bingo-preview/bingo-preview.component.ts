import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MOCK_TABLE } from 'src/assets/configuration/mock-data';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-bingo-preview',
  templateUrl: './bingo-preview.component.html',
  styleUrls: ['./bingo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BingoPreviewComponent implements OnInit {
  private generatedTable: BingoElement[][] = MOCK_TABLE;

  public get GeneratedTable(): BingoElement[][] {
    return this.generatedTable;
  }


  constructor() { }

  ngOnInit(): void { }

}
