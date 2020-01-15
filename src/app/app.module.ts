import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule, Routes } from "@angular/router";
import { NewProductComponent } from "./new-product/new-product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { VerreTechniComponent } from "./verre-techni/verre-techni.component";
import { VerreFeuilDecoComponent } from "./verre-feuil-deco/verre-feuil-deco.component";
import { MiroitTradiComponent } from "./miroit-tradi/miroit-tradi.component";
import { LocalisationComponent } from './localisation/localisation.component';

const appRoutes: Routes = [
  { path: "new-product", component: NewProductComponent },
  { path: "verre-techni", component: VerreTechniComponent },
  { path: "verre-feuil-deco", component: VerreFeuilDecoComponent },
  { path: "miroit-tradi", component: MiroitTradiComponent },
  { path: "", redirectTo: "/new-product", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
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
    LocalisationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
