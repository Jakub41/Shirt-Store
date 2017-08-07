import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdListModule, MdSnackBarModule,
    MdSortModule, MdTableModule, MdTooltipModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';
import { GridModule } from '@progress/kendo-angular-grid';
import { reducer } from './reducers/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components//header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RestService} from './services/rest.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,        
        // DetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BusyModule,
        StoreModule.provideStore(reducer),
        MdToolbarModule,
        MdButtonModule,
        MdCardModule,
        MdIconModule,
        MdListModule,
        MdSnackBarModule,
        MdTableModule,
        MdSortModule,
        MdTooltipModule,
        GridModule
    ],
    providers: [
        RestService        
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
