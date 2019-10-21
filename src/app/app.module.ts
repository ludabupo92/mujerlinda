import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { MascotaService } from './services/mascota.service'

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { TarjetaMascotaComponent } from './components/tarjeta-mascota/tarjeta-mascota.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BuscadorComponent,
    MascotaComponent,
    MascotasComponent,
    TarjetaMascotaComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MascotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
