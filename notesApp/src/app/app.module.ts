import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesAppLayaoutComponent } from './notes-app-layaout/notes-app-layaout.component';
import { NotesHeaderComponent } from './notes-app-layaout/notes-header/notes-header.component';
import { NotesListViewComponent } from './notes-app-layaout/notes-list-view/notes-list-view.component';
import { NotesDetailViewComponent } from './notes-app-layaout/notes-detail-view/notes-detail-view.component';
import { SearchNotesPipe } from './notes-app-layaout/filter/search-notes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesAppLayaoutComponent,
    NotesHeaderComponent,
    NotesListViewComponent,
    NotesDetailViewComponent,
    SearchNotesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
