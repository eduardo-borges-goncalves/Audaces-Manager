import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/interfaces/models';
import { ModelsService } from 'src/app/services/models/models.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent implements OnInit {
  public form!: FormGroup
  public submitted = true
  public models!:Model[]
  public collections: string[] = []

  constructor(
    private _service: ModelsService, 
    private _fb: FormBuilder, 
    private _route: ActivatedRoute, 
    private _router: Router,
  ) { }

  ngOnInit(): void {
    let register = null; 

    this.form = this._fb.group({
      id: null, 
      name: ["", [Validators.required, Validators.minLength(3)]], 
      type: ["" ], 
      responsible: ["",[ Validators.required, Validators.minLength(3)]], 
      collection: [""], 
      embroidery: [""],
      print: [""],
    })

    this._route.params.subscribe((params:any) =>{
      const id = params["id"]
      const model$ = this._service.getOne(id)
      model$.subscribe( model => {
        register = model
        this.updateForm(model)
      })
    })

    this._service.get().subscribe(models => {
      this.models = models
      this.models.map(model =>{ this.collections.push(model.collection)})
      this.collections = this.collections.filter((collection, index) =>
        this.collections.indexOf(collection) === index )
    })
  }

  public updateForm (model: Model) {
    this.form.patchValue({
      id: model.id, 
      name: model.name, 
      type: model.type,
      collection: model.collection, 
      print: model.print, 
      responsible: model.responsible,
      embroidery: model.embroidery, 
    })
  }
  
  public onSubmit() {
    console.log("formulario valor", this.form.value)
    if(this.form.valid) {
      if(this.form.value.id) {
        console.log("------")
        this._service.update(this.form.value).subscribe()
      } else {
        this._service.post(this.form.value).subscribe()
      }
      this._router.navigate(["/models"])
    } else {
      // erro / form inválido 
    }
  }
  
  public onDelete() {
    this._service.delete(this.form.value.id).subscribe()
    this._router.navigate(["/models"])
  }
}
