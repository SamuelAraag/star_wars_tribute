import { Component, OnInit } from "@angular/core";
import { NavigationError, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "star_wars_tribute";

  constructor(private router: Router) {}

  ngOnInit(): void {
    const rotaHome = "";

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        this.router.navigate([rotaHome]);
      }
    });
  }
}
