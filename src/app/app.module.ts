import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementsFormComponent } from './elements-form/elements-form.component';
import { BingoPreviewComponent } from './bingo-preview/bingo-preview.component';
import { DATA_PROVIDERS } from 'src/assets/configuration/providers';
import { BingoHandlerComponent } from './bingo-handler/bingo-handler.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BingoElementCellComponent } from './bingo-element-cell/bingo-element-cell.component';
import { BingoElementListComponent } from './bingo-element-list/bingo-element-list.component';
import { ContentEditableValueAccessor } from './shared/contenteditable.directive';
import { HelpModalComponent } from './help-modal/help-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsFormComponent,
    BingoPreviewComponent,
    BingoHandlerComponent,
    EditFormComponent,
    BingoElementCellComponent,
    BingoElementListComponent,
    ContentEditableValueAccessor,
    HelpModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [DATA_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
