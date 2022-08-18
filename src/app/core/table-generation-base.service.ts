import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from './types';

@Injectable({
  providedIn: 'root'
})
export abstract class TableGenerationBaseService {
  public abstract getTable(): Observable<Table>;
}
