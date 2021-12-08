import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditWineListComponent } from './wine/edit-wine-list/edit-wine-list.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';

const routes: Routes = [
  { path: 'wines', component: WineListComponent },
  { path: 'wines/add', component: EditWineListComponent },
  { path: 'wines/:id', component: EditWineListComponent },
  { path: '', redirectTo: 'wines', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
