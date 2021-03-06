import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { RegisterPage } from '../pages/register/register';
import { AnadirLeccionPage } from '../pages/anadir-leccion/anadir-leccion';
import { LeccionPage } from '../pages/leccion/leccion';
import { UsersProvider } from '../providers/users/users';
import { AnadirProvider } from '../providers/anadir/anadir';

import { LeccionPageModule } from '../pages/leccion/leccion.module';
import { AnadirLeccionPageModule } from '../pages/anadir-leccion/anadir-leccion.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    LeccionPageModule,
    AnadirLeccionPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    LeccionPage,
    AnadirLeccionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    AnadirProvider,
  ]
})
export class AppModule {}
