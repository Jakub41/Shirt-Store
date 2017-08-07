import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { BusyModule } from 'angular2-busy';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdListModule, MdSnackBarModule,
    MdSortModule, MdTableModule, MdTooltipModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { reducer } from '../../reducers/index';
import { HomeComponent } from './home.component';
import { RestService } from '../../services/rest.service';

describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [            
            HomeComponent,           
        ],
        imports: [
            BrowserModule,
            HttpModule,            
            BrowserAnimationsModule,
            BusyModule,
            RouterModule.forRoot([{ path: "", component: HomeComponent}]),
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
        const fixture = TestBed.createComponent(HomeComponent);
        const home = fixture.debugElement.componentInstance;        
        expect(home).toBeTruthy();
    }));

    it('should not show quote before OnInit', async(() => {

        const fixture = TestBed.createComponent(HomeComponent);
        const home = fixture.debugElement.componentInstance;
        const restService = fixture.debugElement.injector.get(RestService);              
    }));  
});
