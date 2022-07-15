import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class ElementsService implements ElementsBaseService {
  private elements: BehaviorSubject<BingoElement[]> = new BehaviorSubject<BingoElement[]>([]);
  private counter = 0;

  public addElement(el: string): void {
    this.elements.next(this.elements.value.concat({ id: Date.now() + this.counter.toString(), value: el }));
    this.counter++;
  }

  public editElement(id: string, value: string): void {
    const elIndex: number = this.elements.value.findIndex(el => el.id === id);
    this.elements.value[elIndex].value = value;
    this.elements.next(this.elements.value);
  }

  public deleteElement(id: string): void {
    const elIndex: number = this.elements.value.findIndex(el => el.id === id);
    this.elements.next([...this.elements.value.slice(0, elIndex), ...this.elements.value.slice(elIndex + 1, this.elements.value.length)]);
  }

  public getElements(): Observable<BingoElement[]> {
    return this.elements;
  }
}
