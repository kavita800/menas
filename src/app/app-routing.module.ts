import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';
import { ProductCopyComponent } from './product-copy/product-copy.component';
import { ServiceComponent } from './service/service.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SpecialsComponent } from './specials/specials.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { LocationComponent } from './location/location.component';
// import { BasicelementsComponent } from './basicelements/basicelements.component';



const routes: Routes = [
  { path: '', redirectTo:'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'blog', component: BlogComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'element', component: ElementsComponent  },
  { path: 'gallery', component: GalleryComponent  },
  { path: 'product', component: ProductComponent  },
  { path: 'product-copy', component: ProductCopyComponent  },
  { path: 'service', component: ServiceComponent  },
  { path: 'single-blog', component: SingleBlogComponent  },
  { path: 'specials', component: SpecialsComponent  },
  { path: 'our-team/:name', component: OurTeamComponent  },
  { path: 'location', component: LocationComponent  },

  // { path: 'appointment', component: BasicelementsComponent  },
  
  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
