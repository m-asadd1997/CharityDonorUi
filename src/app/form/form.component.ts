import { FormService } from "./../Services/form.service";
import { Component, OnInit } from "@angular/core";
import { FormClass } from "./form";
import { Router } from "@angular/router";
import { CardModule } from "primeng/card";
import { MessageService } from "primeng/api";
import { DonorFormService } from "./charity-serv.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  name: string;
  email: string;
  age: number;
  address: String;
  fullname: String = "";
  formObj: FormClass = new FormClass();
  dropdownOptions = [];
  postalCodeCheck: Boolean;
  charityObj: any = null;
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };
  cols: { field: string; header: string }[];

  constructor(
    private formService: FormService,
    private router: Router,
    private mesgService: MessageService,
    private charityService: DonorFormService
  ) {}

  ngOnInit() {
    this.dropdownOptions = [
      ...this.dropdownOptions,
      {
        charityId: 1,
        description: "NSPCC",
        logoFileName: "nspcc",
        charityName: "NSPCC",
        purpose: "Child protection",
        registrationId: "12345678"
      },
      {
        charityId: 2,
        description: "Cancer Research UK",
        logoFileName: "cruk",
        charityName: "Cancer Research UK",
        purpose: "Cancer Research and prevention",
        registrationId: "12312433"
      },
      {
        charityId: 3,
        description: "Cancer Research Wales",
        logoFileName: "crw",
        charityName: "Cancer Research Wales",
        purpose: "Cancer Research and prevention",
        registrationId: "12279188"
      },
      {
        charityId: 4,
        description: "Amnesty International",
        logoFileName: "amnesty",
        charityName: "Amnesty International",
        purpose: "Human Rights Upkeep",
        registrationId: "12245943"
      },
      {
        charityId: 5,
        description: "Cancer Scotland",
        logoFileName: "cancer_scotland",
        charityName: "Cancer Scotland",
        purpose: "Cancer Research and prevention",
        registrationId: "0"
      },
      {
        charityId: 6,
        description: "British Heart Foundation",
        logoFileName: "bhf",
        charityName: "British Heart Foundation",
        purpose: "Heart Disease Research and prevention",
        registrationId: "12179453"
      },
      {
        charityId: 7,
        description: "Kidney Research UK",
        logoFileName: "kruf",
        charityName: "Kidney Research UK",
        purpose: "Kidney Disease Research and prevention",
        registrationId: "12146208"
      },
      {
        charityId: 8,
        description: "Oxfam",
        logoFileName: "oxfam",
        charityName: "Oxfam",
        purpose: "Worldwide aid",
        registrationId: "12112963"
      },
      {
        charityId: 9,
        description: "Green peace",
        logoFileName: "greenpeace",
        charityName: "Greenpeace",
        purpose: "Environmental protection and upkeep",
        registrationId: "12079718"
      }
    ];

    this.formObj.ownMoney = false;
    this.formObj.wishesToGiftAid = false;
    this.formObj.hasNoBenefitToDonor = false;

    this.cols = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" }
    ];
  }

  showData() {
if(this.formObj.amount< 1){
 
    this.mesgService.add({
      severity: "error",
      summary: "Failed",
      detail: "Amount must be >= 1 "
    });
    
  
}
else{
      this.formObj.donorFirstName = this.fullname
      .split(" ")
      .slice(0, -1)
      .join(" ");
    this.formObj.donorLastName = this.fullname
      .split(" ")
      .slice(-1)
      .join(" ");
    this.formObj.charityId = this.charityObj["charityId"];
    this.formObj.charityName = this.charityObj["charityName"];
    this.formObj.purpose = this.charityObj["purpose"];
    this.formObj.logoFileName = this.charityObj["logoFileName"];
    this.formObj.registrationId = this.charityObj["registrationId"];
    
    this.charityService.saveDonorForm(this.formObj).subscribe(
      data => {
        this.mesgService.add({
          severity: "info",
          summary: "Added  Successfully",
          detail: "Added"
        });

        
      },
      error => {
        this.mesgService.add({
          severity: "error",
          summary: "Failed",
          detail: "Something went wrong check your internet connection "
        });
        
      }
    );
  }
}
  
  routeToViewCharity() {
    this.router.navigate(["routeToViewCharity"]);
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  
  
}
