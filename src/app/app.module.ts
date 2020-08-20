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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
