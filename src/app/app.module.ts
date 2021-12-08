import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HeaderComponent } from './core/header/header.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineComponent } from './wine/wine.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { TableComponent } from './wine/table/table.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { EditWineListComponent } from './wine/edit-wine-list/edit-wine-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    WineListComponent,
    WineComponent,
    SearchFormComponent,
    TableComponent,
    PaginationComponent,
    EditWineListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
