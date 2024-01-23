import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

import { AppComponent } from './app.component';
import { BingoPreviewComponent } from './bingo-preview/bingo-preview.component';
import { DATA_PROVIDERS } from 'src/assets/configuration/providers';
import { BingoHandlerComponent } from './bingo-handler/bingo-handler.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ContentEditableValueAccessor } from './shared/contenteditable.directive';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { FeatureToggleServiceBase } from './core/feature-toggle-base.service';
import { TableEditorComponent } from './table-editor/table-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoPreviewComponent,
    BingoHandlerComponent,
    EditFormComponent,
    ContentEditableValueAccessor,
    HelpModalComponent,
    TableEditorComponent,
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
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [
    DATA_PROVIDERS,
    {
      provide: APP_INITIALIZER,
      useFactory: (featureToggleService: FeatureToggleServiceBase) => () =>
        featureToggleService.loadFeatureToggles(),
      deps: [FeatureToggleServiceBase],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
