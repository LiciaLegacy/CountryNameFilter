import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countriesToBeRendered: string[];
  countryChanged;
  showCountryNotPresent:boolean = false;

  constructor(private filterService:FilterService) { }

  ngOnInit():void{
    //this doesn't work for some reason to render list, but the get method below does work
      this.countriesToBeRendered = this.filterService.renderFilteredCountries();

  }

  get namesList():string[]{
    if(this.filterService.renderFilteredCountries().length == 0){
      this.showCountryNotPresent = true;
    }else
    return this.filterService.renderFilteredCountries();
  }

}

