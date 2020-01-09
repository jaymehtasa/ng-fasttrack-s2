import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list-cell',
  templateUrl: './recipe-list-cell.component.html',
  styleUrls: ['./recipe-list-cell.component.scss']
})
export class RecipeListCellComponent implements OnInit {

  @Input() recipe;
  constructor() { }

  ngOnInit() {
  }
}
