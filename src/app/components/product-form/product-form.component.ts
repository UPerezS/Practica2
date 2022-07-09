import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form:FormGroup= new FormGroup({});
  constructor() {
    this.construirForm();
  }
  // form:FormGroup= new FormGroup({});
  // constructor(private formBuilder:FormBuilder) {
  //   this.construirForm();
  // }

  ngOnInit(): void {
  }
  
  /** 1) Constructor de Formularios*/
   private construirForm(){
     this.form= new FormGroup({
       name:  new FormControl('',[Validators.required]),
       date: new FormControl('',[Validators.required]),
       email: new FormControl('',[Validators.required]),
       text: new FormControl('',[Validators.maxLength(200)]),
       category: new FormControl('',[Validators.required]),
       gender: new FormControl('',[Validators.required])
     });
    // private construirForm(){
    //   this.form= this.formBuilder.group ({
    //     name: ['',[Validators.required]] ,
    //     date: ['',[Validators.required]],
    //     email: ['',[Validators.required]],
    //     text: ['',[Validators.maxLength(200)]],
    //     category: ['',[Validators.required]],
    //     gender: ['',[Validators.required]]
    //   });
    
    /** Envia los Cambios*/
    // this.form.valueChanges
    // .subscribe(value =>{
    //   console.log(value);
    // })
  }

  save(event:Event){
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }
}
