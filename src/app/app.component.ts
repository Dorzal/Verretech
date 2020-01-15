import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]

})
export class AppComponent {
  title = "VERRE-TECH";
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
