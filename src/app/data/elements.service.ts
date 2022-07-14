import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';

@Injectable({
  providedIn: 'root'
})
export class ElementsService implements ElementsBaseService {
  private elements: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public addElement(el: string): void {
    this.elements.next(this.elements.value.concat(el));
  }

  public editElement(): void {

  }

  public deleteElement(): void {

  }

  public getElements(): Observable<string[]> {
    return this.elements;
  }
}
