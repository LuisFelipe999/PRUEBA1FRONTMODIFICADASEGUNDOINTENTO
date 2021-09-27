import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { BodyComponent } from './compartida/body/body.component';
import { ScriptComponent } from './compartida/script/script.component';
import { PrincipalComponent } from './general/principal/principal.component';
import { MenuComponent } from './general/menu/menu.component';
import { FormularioComponent } from './general/formulario/formulario.component';
import { RegistroComponent } from './general/registro/registro.component';
import { InicioComponent } from './compartida/inicio/inicio.component';
import { PaginaComponent } from './enconstruccion/pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentNameComponent,
    FooterComponent,
    AsideComponent,
    BodyComponent,
    ScriptComponent,
    PrincipalComponent,
    MenuComponent,
    FormularioComponent,
    RegistroComponent,
    InicioComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
