import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { BusyModule } from 'angular2-busy';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdListModule, MdSnackBarModule,
    MdSortModule, MdTableModule, MdTooltipModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { reducer } from './reducers/index';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components//header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components//shopping-cart/shopping-cart.component';
import { RestService} from './services/rest.service';
import { DetailComponent } from './components//detail/detail.component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent,
            HomeComponent,
            HeaderComponent,
            ShoppingCartComponent,
            DetailComponent
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
        providers: [{provide: APP_BASE_HREF, useValue: '/'}, RestService]
        }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
