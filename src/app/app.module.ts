import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

// #Services
import { WishListService } from './services/wish-list.service';

// #Pipes
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { PendingsPipe } from './pipes/pendings.pipe';

// #Pages
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingPage } from '../pages/pending/pending';
import { CompletedPage } from '../pages/completed/completed';
import { AddPage } from '../pages/add/add';
import { DetailsPage } from '../pages/details/details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        PlaceholderPipe,
        PendingsPipe,
        AboutPage,
        TabsPage,
        PendingPage,
        CompletedPage,
        AddPage,
        DetailsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        TabsPage,
        PendingPage,
        CompletedPage,
        AddPage,
        DetailsPage
    ],
    providers: [
        WishListService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ScreenOrientation
    ]
})
export class AppModule {}
