//  Core
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TranslateModule } from "@ngx-translate/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "@env/environment";
import { CoreModule } from "@app/core";
import { SharedModule } from "@app/shared";

// Import Các module chức năng
import { MaterialModule } from "./material.module";

import { HomeModule } from "./home/home.module";
import { ShellModule } from "./shell/shell.module";
import { LoginModule } from "./login/login.module";
import { DepartmentModule } from "./department/department.module";
// Import component
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("./ngsw-worker.js", { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    LoginModule,
    DepartmentModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
