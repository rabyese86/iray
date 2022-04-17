import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Makeendcall';

  show = false

  getData(val:string){

    console.warn(val)

  }

  name ="Rabbi"

  disable=false
  users=['one' , 'two' ,'three','four']

  cities=["London", "New york", "KL", "Dubai", "Berlin" ]

  Users=[
    {

      name:'London',
      phone: '09599859'

    },

    {

      name:'Berlin',
      phone:'0959959000'


    },
    {

      name:"New York",
      phone:'01234550090'



    }

  ]


}




