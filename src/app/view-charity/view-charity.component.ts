import { Component, OnInit } from '@angular/core';
import { DonorFormService } from '../form/charity-serv.service';
import { Charity } from './charity';

@Component({
  selector: 'app-view-charity',
  templateUrl: './view-charity.component.html',
  styleUrls: ['./view-charity.component.css']
})
export class ViewCharityComponent implements OnInit {
  cols: { field: string; header: string; }[];
  donations = [];
  charityObj : Charity = new Charity();
  isDisableName = false;
  isDisableId = false;
  noValues = false;
  charityId;
  showTableOrNot = false;
  constructor(private dsService:DonorFormService) { } 

  ngOnInit() {
    
    this.cols = [
      { field: "id", header: "ID" },
      { field: "lastUpdatedDate", header: "Last updated date" },
      { field: "totalAfterGifAid", header: "Total After Gift Aid" },
      { field: "totalBeforeGiftAid", header: "Total Before Gift Aid" },
      { field: "totalGiftAid", header: "Total Gift Aid" },
      { field: "charityId", header: "Charity ID" }
    ];

    // this.cols['id'] = 1;
    this.getAllDonations();

  }


  getAllDonations(){
    this.dsService.getAllDonations().subscribe((d=>{
      
     



      d.map(e=>{

        let charityTotal = e['charityTotal'];
        charityTotal.map(ct=>{
            this.donations.push({...ct,'charityId':e['id']}); 
        })
     
      })

    
    }))
  }



  checkServiceToCall(){

        this.noValues = false;
        if(this.charityObj.id=0){
         this.getByID();
        
        }
        else if(this.charityObj.name!=""){
          console.log(this.charityObj.name)
          this.getByName();   
        }

       

    }




 
  getByName(){
    this.donations = [];
    this.dsService.getDonationByName(this.charityObj.name).subscribe((d=>{
      if(d){
          
          d.charityTotal.map(e=>{
          this.donations.push(e);
      })
      }
      else{
        this.noValues = true;
        this.showTableOrNot = false;
        this.donations = [];
      }
     
    }))
  } 

  getByID(){
    this.donations = [];
    this.dsService.getDonationById(this.charityObj.id).subscribe((d=>{
  
      if(d){
        d.charityTotal.map(e=>{
          this.donations.push(e);
      })
    
      }
      else {
        this.showTableOrNot = false;
        this.noValues = true;
        this.donations = [];
      }
      
    }))
  }

  doDisable(event:any){
   
    if(this.charityObj.name!=null){
        this.isDisableId = true;
        this.isDisableName = false;
    }
    else if(this.charityObj.id!=null){
      this.isDisableId = false;
      this.isDisableName = true;
    }
    else if(event.data){
      this.isDisableName = false;
      this.isDisableId = false; 

    }
  

  }
}
