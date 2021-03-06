import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameAndPicture } from './cv-sections/name-and-picture';
import { AboutContactComponent } from './cv-sections/about-contact.component';
import { CvStructureComponent } from './core/cv-structure/cv-structure.component';
import { ContactComponent } from './cv-sections/contact.component';
import { EducationComponent } from './cv-sections/education.component';
import { SkillsComponent } from './cv-sections/skills.component';
import { CertificationsComponent } from './cv-sections/certifications.component';
import { LanguagesComponent } from './cv-sections/languages.component';
import { ProjectsComponent } from './cv-sections/projects.component';
import { ExperienceComponent } from './cv-sections/experience.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {ProfileComponent} from "./templates/modern_cv/cv-sections/profile.component";
import {ModernCVStructure} from "./templates/modern_cv/core/modern-cv-structure";
import {MainPageComponent} from "./core/pages/main/main-page.component";
import {AppGalaryComponent} from "./core/pages/templates-galary/galary.component";
import {AppLoginComponent} from "./core/pages/login/shared/login.component";
import {AppLoginCoreComponent} from "./core/pages/login/core/login-core.component";
import {AppModernExperienceComponent} from "./templates/modern_cv/cv-sections/experience.component";
import {AppModernPersonalDetailsComponent} from "./templates/modern_cv/cv-sections/personal-details.component";
import {AppModernNameComponent} from "./templates/modern_cv/cv-sections/name.component";
import {AppModEducationComponent} from "./templates/modern_cv/cv-sections/education.component";
import {AppModReferenceComponent} from "./templates/modern_cv/cv-sections/reference.component";
import {AppModContactComponent} from "./templates/modern_cv/cv-sections/contact.component";
import {AppModSkillsComponent} from "./templates/modern_cv/cv-sections/skills.component";
import {AppModLangComponent} from "./templates/modern_cv/cv-sections/languages.component";
import { AppProjectsComponent } from './templates/modern_cv/cv-sections/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NameAndPicture,
    AboutContactComponent,
    CvStructureComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    LanguagesComponent,
    ProjectsComponent,
    ExperienceComponent,
    ProfileComponent,
    ModernCVStructure,
    MainPageComponent,
    AppGalaryComponent,
    AppLoginComponent,
    AppLoginCoreComponent,
    AppModernExperienceComponent,
    AppModernPersonalDetailsComponent,
    AppModernNameComponent,
    AppModEducationComponent,
    AppModReferenceComponent,
    AppModContactComponent,
    AppModSkillsComponent,
      AppModLangComponent,
      AppProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
