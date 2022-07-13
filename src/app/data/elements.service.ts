import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';

@Injectable({
  providedIn: 'root'
})
export class ElementsService implements ElementsBaseService {
  private elements: Observable<string[]> = new Observable();

  public addElement(): void {

  }

  public editElement(): void {

  }

  public deleteElement(): void {

  }

  public getElements(): Observable<string[]> {
    return this.elements;
  }
}
