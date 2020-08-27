import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamConfig } from "../shared/config/team.config";
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  page : string;
  members : any = [];
  constructor(private router: Router ,private route: ActivatedRoute) { 
    router.events.subscribe((val) => {
      // see also 
      // console.log("this.route.snapshot.paramMap.get('name') >>>>>",this.route.snapshot.paramMap.get('name'));
      
      this.members = TeamConfig[this.route.snapshot.paramMap.get('name')]
   


  });
  }
burial

  ngOnInit() {
     this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = params['page'];
    // console.log("Paramenter >>>>>>>>>>",this.route.snapshot.paramMap.get('name'));
      });
  }

  ngOnChanges(){
    console.log("Paramenter 3333 >>>>>>>>>>",this.route.snapshot.paramMap.get('name'));

  }
 

}
