import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.module';
import { RouterModule } from '@angular/router';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { CounterComponent } from './component/counter/counter.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';
import { blogReducer } from './shared/store/Blog/Blog.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './shared/store/Global/app.state';
import { AddblogComponent } from './component/addblog/addblog.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    HomeComponent,
    BlogComponent,
    CounterComponent,
    MenuheaderComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
