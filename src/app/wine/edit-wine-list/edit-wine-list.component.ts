import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Wine } from 'src/app/model/wine.model';
import { WineService } from 'src/app/wineService/wine.service';

@Component({
  selector: 'wc-edit-wine-list',
  templateUrl: './edit-wine-list.component.html',
  styleUrls: ['./edit-wine-list.component.css'],
})
export class EditWineListComponent implements OnInit {
  wine: Wine;
  wineForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: WineService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id'); // Uzimanje parametara iz URL-a wines/:id sa ActivatedRoute
    if (id) {
      this.service.getOneWine(Number(id)).subscribe((response) => {
        this.wine = response;
        this.wineForm.patchValue(this.wine); // Popunjavanje forme
      });
    }
  }

  createForm(): void {
    this.wineForm = this.fb.group({
      // Kreiranje forme pomocu Form Builder-a
      name: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', Validators.required],
      grapes: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    let submittedWine: Wine = new Wine(this.wineForm.value); // Pravimo novu promenljivu objekat Vina sa vrednostima iz forme
    if (this.wine && this.wine._id) {
      // Proveravamo da li ovo Vino posotji i da li posotoji sa ovim ID-om
      submittedWine._id = this.wine._id; // Ukoliko postoji Vinu koje cemo submitovati dodeljujemo taj ID, kako bi posalo PUT zahtev za azuriranje Vina sa tim ID-om
      this.service.updateWine(submittedWine).subscribe((wine) => {
        this.wineForm.reset(); // Resetovanje forme nakon submitovanja
        this.router.navigate(['/wines']); // Redirekcija nakon klika na odredjenu rutu, Router - navigate
      });
    } else {
      this.service.addWine(submittedWine).subscribe((wine) => {
        this.wineForm.reset();
        this.router.navigate(['wines/']);
      });
    }
  }
}
