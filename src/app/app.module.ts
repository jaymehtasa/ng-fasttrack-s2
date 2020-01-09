import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { HighLightDirective } from './highlight.directive';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListCellComponent } from './recipe-list-cell/recipe-list-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRecipeComponent,
    RecipeCellComponent,
    HighLightDirective,
    RecipesComponent,
    RecipeListCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
