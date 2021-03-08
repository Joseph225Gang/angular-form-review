import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css']
})
export class ControlFormComponent implements OnInit {
  favoriteColorControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
