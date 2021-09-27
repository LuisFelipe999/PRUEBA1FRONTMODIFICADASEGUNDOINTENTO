import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './compartida/aside/aside.component';
import { InicioComponent } from './compartida/inicio/inicio.component';
import { PrincipalComponent } from './general/principal/principal.component';
import { FormularioComponent } from './general/formulario/formulario.component'; 
import { MenuComponent } from './general/menu/menu.component'; 
import { PaginaComponent } from './enconstruccion/pagina/pagina.component';



const routes: Routes = [ 
{path:'principal', component: PrincipalComponent},
{path:'Aside', component: AsideComponent},
{path:'inicio', component: InicioComponent}, 
{path:'formulario', component: FormularioComponent},
{path:'menu',component: MenuComponent}, 
{path:'pagina',component: PaginaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
