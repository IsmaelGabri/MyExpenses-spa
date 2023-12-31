import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  

   onCreate(){
    this.dialog.open(AddItemComponent, {
      width: '500px',
      height: '290px'
    });
   }

  ngOnInit(): void {
    
  }
}

interface Item{
  type?: string;
  name?: string;
  Price?: DecimalPipe[];
  Status?: Boolean;
}

enum Type{
  Despesa = 'Despesa',
  Renda = 'Renda'
}