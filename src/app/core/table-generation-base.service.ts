import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Table } from './types';

/**
 * The service generates two-dimensional array from bingo elements list
 */
@Injectable({
  providedIn: 'root'
})
export abstract class TableGenerationBaseService {
  public abstract getTable(): Observable<Table>;
}
