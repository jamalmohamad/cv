import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvStructureComponent} from "./core/cv-structure/cv-structure.component";
import {MainPageComponent} from "./core/pages/main/main-page.component";
import {AppGalaryComponent} from "./core/pages/templates-galary/galary.component";
import {ModernCVStructure} from "./templates/modern_cv/core/modern-cv-structure";
import {AppLoginCoreComponent} from "./core/pages/login/core/login-core.component";

const routes: Routes = [
    {path: 'basic-cv', component: CvStructureComponent},
    {path: '', component: MainPageComponent},
    {path: 'gallery', component: AppGalaryComponent},
    {path: 'modern-cv', component: ModernCVStructure},
    {path: 'login', component: AppLoginCoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
