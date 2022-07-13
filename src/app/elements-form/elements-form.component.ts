import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-elements-form',
  templateUrl: './elements-form.component.html',
  styleUrls: ['./elements-form.component.scss']
})
export class ElementsFormComponent implements OnDestroy, OnInit {
  private newElement = '';
  private elements: string[] = [];
  private destroy$: Subject<void> = new Subject();

  public get NewElement(): string {
    return this.newElement;
  }

  public set NewElement(newElement: string) {
    this.newElement = newElement;
  }

  public get Elements(): string[] {
    return this.elements;
  }

  constructor(private readonly elementsService: ElementsBaseService) { }

  public ngOnInit(): void {
    this.elementsService.getElements().pipe(takeUntil(this.destroy$)).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public addElement(): void { }

  public removeElement(): void { }

  public editElement(): void { }
}
