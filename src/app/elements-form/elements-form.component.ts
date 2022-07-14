import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { MOCK_DATA } from 'src/assets/configuration/mock-data';

@Component({
  selector: 'app-elements-form',
  templateUrl: './elements-form.component.html',
  styleUrls: ['./elements-form.component.scss']
})
export class ElementsFormComponent implements OnDestroy, OnInit {
  private newElement = '';
  private destroy$: Subject<void> = new Subject();

  public get NewElement(): string {
    return this.newElement;
  }

  public set NewElement(newElement: string) {
    this.newElement = newElement;
  }

  public get Elements(): Observable<string[]> {
    return this.elementsService.getElements();
  }

  constructor(private readonly elementsService: ElementsBaseService) { }

  public ngOnInit(): void {
    MOCK_DATA.forEach(element => {
      this.elementsService.addElement(element);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public addElement(): void {
    this.elementsService.addElement(this.newElement);
  }

  public removeElement(): void { }

  public editElement(): void { }
}
