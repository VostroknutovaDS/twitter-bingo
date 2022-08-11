import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { BingoElement } from '../core/types';
import { MAX_NUMBER_OF_ELEMENTS } from 'src/assets/configuration/constants';

@Component({
  selector: 'app-elements-form',
  templateUrl: './elements-form.component.html',
  styleUrls: ['./elements-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsFormComponent implements OnDestroy {
  @ViewChild('addInput') private addInput!: ElementRef;
  private newElement = '';
  private destroy$: Subject<void> = new Subject();
  public readonly MAX_NUMBER_OF_ELEMENTS = MAX_NUMBER_OF_ELEMENTS;

  public get NewElement(): string {
    return this.newElement;
  }

  public set NewElement(newElement: string) {
    this.newElement = newElement;
  }

  public get Elements(): Observable<BingoElement[]> {
    return this.elementsService.getElements();
  }

  constructor(private readonly elementsService: ElementsBaseService) { }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public addElement(): void {
    this.elementsService.addElement(this.newElement);
    this.newElement = '';
    this.addInput.nativeElement.focus();
  }
}
