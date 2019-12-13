import { BrowserModule } from "@angular/platform-browser";
import { NgModule, PipeDecorator } from "@angular/core";
// Import module
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";

// Import Component
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
