import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule, Routes } from "@angular/router";
import { NewProductComponent } from "./new-product/new-product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { VerreTechniComponent } from "./verre-techni/verre-techni.component";
import { VerreFeuilDecoComponent } from "./verre-feuil-deco/verre-feuil-deco.component";
import { MiroitTradiComponent } from "./miroit-tradi/miroit-tradi.component";
import { LocalisationComponent } from './localisation/localisation.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PanierComponent } from './panier/panier.component';
import { InformationClientComponent } from './information-client/information-client.component';
import { FacturationComponent } from './facturation/facturation.component';
import { ConfirmationReservationComponent } from './confirmation-reservation/confirmation-reservation.component';
import { FaqComponent } from './faq/faq.component';
import { AproposComponent } from './apropos/apropos.component';
import { MentionlegaleComponent } from './mentionlegale/mentionlegale.component';
import { PointRelaisComponent } from './point-relais/point-relais.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';


const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "new-product", component: NewProductComponent },
  { path: "verre-techni", component: VerreTechniComponent },
  { path: "verre-feuil-deco", component: VerreFeuilDecoComponent },
  { path: "miroit-tradi", component: MiroitTradiComponent },
  { path: "panier", component: PanierComponent },
  { path: "product-detail", component: ProductDetailComponent },
  { path: "information-client", component: InformationClientComponent },
  { path: "facturation", component: FacturationComponent },
  { path: "faq", component: FaqComponent },
  { path: "service", component: ServiceComponent },
  { path: "contact", component: ContactComponent },
  { path: "point-relais", component: PointRelaisComponent },
  { path: "mentionleg", component: MentionlegaleComponent },
  { path: "apropos", component: AproposComponent },
  { path: "confirm-reserv", component: ConfirmationReservationComponent },
  { path: "", redirectTo: "/new-product", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    NewProductComponent,
    PageNotFoundComponent,
    VerreTechniComponent,
    VerreFeuilDecoComponent,
    MiroitTradiComponent,
    LocalisationComponent,
    HomeComponent,
    ProductDetailComponent,
    PanierComponent,
    InformationClientComponent,
    FacturationComponent,
    ConfirmationReservationComponent,
    FaqComponent,
    AproposComponent,
    MentionlegaleComponent,
    PointRelaisComponent,
    ContactComponent,
    ServiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
