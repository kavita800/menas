import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SpecialsComponent } from './specials/specials.component';
import { ElementsComponent } from './elements/elements.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCopyComponent } from './product-copy/product-copy.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurTeamComponent } from './our-team/our-team.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { OwlModule } from 'ngx-owl-carousel';  
// import { BasicelementsComponent } from './basicelements/basicelements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    GalleryComponent,
    ProductComponent,
    ServiceComponent,
    SingleBlogComponent,
    SpecialsComponent,
    ElementsComponent,
    ContactComponent,
    ProductCopyComponent,
    HomeComponent,
    OurTeamComponent,
    BookAppointmentComponent,
    // BasicelementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    OwlModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
