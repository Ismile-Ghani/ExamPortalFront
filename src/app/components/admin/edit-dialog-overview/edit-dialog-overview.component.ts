import { DeclarationListEmitMode } from '@angular/compiler';
import { Component,Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-dialog-overview',
  templateUrl: './edit-dialog-overview.component.html',
  styleUrls: ['./edit-dialog-overview.component.css']
})
export class EditDialogOverviewComponent {

  
  
  

  constructor(public dialogRef: MatDialogRef<EditDialogOverviewComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any){

      console.log(data)

    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    doAction(){
      
      this.dialogRef.close({formData:this.data});
    }
  
    
    

    
    

}
