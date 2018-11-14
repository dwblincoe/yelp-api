import { Component } from '@angular/core';
import { Params } from './models/params';
import {DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yelp-api';

  states:any =['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

  paramsModel: Params = {
    city: '',
    state: '',
    price: ''
  }

  constructor(private dataService: DataService){}

  restaurant: any
  delivery:string

  search(){
    this.dataService.getRestaurants(this.paramsModel)
      .subscribe(data => {
        let result = data.businesses[Math.floor(Math.random()*10)]
        let deliver = result.transactions.indexOf('delivery')
        if(deliver > 0){
          this.delivery = "We Deliver"
        } else {
          this.delivery = 'Pickup Only'
        }

        this.restaurant = result
      })
  }

}
