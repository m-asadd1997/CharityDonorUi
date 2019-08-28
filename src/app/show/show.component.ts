import { MessageService } from "primeng/api";
import { DonorFormService } from "../../app/form/charity-serv.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"]
})
export class ShowComponent implements OnInit {

  charities = [];
  cols = [];
  constructor(
    private dsService: DonorFormService,
    private MessageService: MessageService
  ) {}

  ngOnInit() {
    this.dsService.getAllDonations().subscribe((res=>{
      console.log(res);
    }))

    this.cols = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }





}
