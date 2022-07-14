import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ElementsBaseService {
  public abstract addElement(el: string): void;
  public abstract editElement(): void;
  public abstract deleteElement(): void;
  public abstract getElements(): Observable<string[]>;
}
