import { Component, OnInit } from '@angular/core';
import { EditFormModes } from './core/edit-form-modes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isMobile = false;
  private showAddButton = true;
  private showEditForm = false;
  public mode: EditFormModes = EditFormModes.Add;

  public get ShowAddButton(): boolean {
    return this.showAddButton;
  }

  ngOnInit(): void {
    this.isMobile = navigator.userAgent.includes('Mobi');
    sessionStorage.setItem('isMobile', this.isMobile.toString());
  }

  public get ShowEditForm(): boolean {
    return this.showEditForm && this.isMobile;
  }

  public openEditForm(): void {
    this.showEditForm = true;
    this.showAddButton = false;
  }

  public closeEditForm(): void {
    this.showEditForm = false;
    this.showAddButton = true;
  }
}
