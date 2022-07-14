import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ElementsBaseService } from '../core/elements-base.service';
import { MOCK_DATA } from 'src/assets/configuration/mock-data';
import { BingoElement } from '../core/types';

@Component({
  selector: 'app-elements-form',
  templateUrl: './elements-form.component.html',
  styleUrls: ['./elements-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  public get Elements(): Observable<BingoElement[]> {
    return this.elementsService.getElements();
  }

  constructor(private readonly elementsService: ElementsBaseService) { }

  public ngOnInit(): void {
    MOCK_DATA.forEach(element => {
      this.elementsService.addElement(element);
    });

    this.elementsService.getElements().subscribe(data => console.log(data));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public addElement(): void {
    this.elementsService.addElement(this.newElement);
  }
}
