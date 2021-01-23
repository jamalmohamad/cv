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
    ExperienceComponent
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
