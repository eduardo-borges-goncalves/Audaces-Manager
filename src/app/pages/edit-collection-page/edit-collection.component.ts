import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/interfaces/collections';
import { CollectionsService } from 'src/app/services/collections/collections.service';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {
  public form!: FormGroup
  public submitted = false

  constructor(
    private _service: CollectionsService, 
    private _fb: FormBuilder, 
    private _router: Router,
    private _route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    let register = null

    this.form = this._fb.group({
      id: null, 
      name: ["", [Validators.required, Validators.minLength(3)]], 
      season: ["", [Validators.required, Validators.minLength(3)] ], 
      budget: ["", [Validators.required, Validators.minLength(3)]], 
      responsible: ["",[ Validators.required, Validators.minLength(3)]], 
      brand: ["", [Validators.required, Validators.minLength(3)]],
      launchYear: ["", [Validators.required, Validators.minLength(3)]],
    })

    this._route.params.subscribe((params: any) => {
      const id = params["id"]
      const collection$ = this._service.getOne(id);
      collection$.subscribe(collection => {
        register = collection
        this.updateForm(collection)
      })
    })
  }

  public updateForm (collection: Collection) {
    this.form.patchValue({
      id: collection.id, 
      name: collection.name, 
      season: collection.season, 
      budget: collection.budget, 
      responsible: collection.responsible,
      brand: collection.brand,
      launchYear: collection.launchYear, 
    })
  }

  public onSubmit() {
    if(this.form.valid) {
      if(this.form.value.id) {
        this._service.update(this.form.value).subscribe()
      } else {
        this._service.post(this.form.value).subscribe()
      }
      this._router.navigate(["/collections"])
    } else {
      window.alert("Algum campo não está preenchido corretamente ainda. Favor preencher todos os campos. ")
    }
  }
  
  public onDelete() {
    this._service.delete(this.form.value.id).subscribe()
    this._router.navigate(["/collections"])
  }
  
  public onCancel() {
    this._router.navigate(["/collections"])
  }
}
