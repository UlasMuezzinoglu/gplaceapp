import { Place } from './models/place';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder ,FormControl ,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaceService } from './services/placeservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gplaceapp';
  constructor(private http : HttpClient,private formbuilder:FormBuilder) {}
  placesForm : any;
  place : Place = {status : "", next_page_token: "" , results : []}
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {
    this.createPlacesForm();
  }

  createPlacesForm(){
    this.placesForm = this.formbuilder.group({
      latitude: ["",Validators.required],
      longitude: ["",Validators.required],
      radius: ["",Validators.required]
    })
  }

  prepareUrl() : string{
    return ("http://3.250.53.46:8070/getPlaces?latitude="+this.placesForm.value.latitude+"&longitude="+this.placesForm.value.longitude+"&radius="+this.placesForm.value.radius).toString();
  }
  
  GetPlaces() : void {
    if (this.placesForm.valid) {
      this.http.get<Place>(this.prepareUrl()).subscribe(
        res=>{
          console.log(res)
          this.place = res;
          if (res.status == "ZERO_RESULTS"){
            alert("There is no place")
          }
        }
      );
    }else {
      alert("Arguments are Required")
    }
  }

}
