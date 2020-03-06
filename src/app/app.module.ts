import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CharEditorComponent } from './char-editor/char-editor.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CharListComponent } from './char-list/char-list.component';
import { CharDetailsComponent } from './char-details/char-details.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {path: 'edit', component: CharEditorComponent, data: {title: 'Character Editor'} },
  {path: 'list', component: CharListComponent, data: {title: 'Character List'}},
  {path: 'characters/:name', component: CharDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CharEditorComponent,
    CharListComponent,
    CharDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
