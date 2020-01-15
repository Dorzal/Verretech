import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/* @Component({
  selector: "app-localisation",
  templateUrl: "./localisation.component.html",
  styleUrls: ["./localisation.component.css"]
}) */
@Component({
  selector: "app-localisation",
  templateUrl: "./localisation.component.html"
})
export class LocalisationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      houseNumber: ["", Validators.required],
      name: ["", Validators.required],
      city: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
