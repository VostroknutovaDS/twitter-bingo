import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BingoElement } from './types';

@Injectable({
  providedIn: 'root'
})
export abstract class ElementsBaseService {
  public abstract addElement(el: string): void;
  public abstract editElement(id: string, value: string): void;
  public abstract deleteElement(id: string): void;
  public abstract getElements(): Observable<BingoElement[]>;
}
