import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { Routes, RouterModule } from "@angular/router";

const ROUTE: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTE)]
})
export class AboutModule {

}
