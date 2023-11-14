import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  cursos: string[] = [""]

   onCreate(){
    this.dialog.open(AddItemComponent);
   }

  ngOnInit(): void {
    
  }
}
