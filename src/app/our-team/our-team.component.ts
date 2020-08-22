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
      // console.log( "Caalusafg ________",val) 
      console.log("this.route.snapshot.paramMap.get('name') >>>>>",this.route.snapshot.paramMap.get('name'));
      
      this.members = TeamConfig[this.route.snapshot.paramMap.get('name')]
      console.log("Paramenter 1111 >>>>>>>>>>",this.members[0].url);
      console.log("Paramenter 2222 >>>>>>>>>>",this.members[0].name);
      console.log("Paramenter 3333 >>>>>>>>>>",this.members);


  });
  }
  // teamM : string = `<p style="text-align: center;">Ayman</p>`;
  // ngOnInit(): void {
  //   console.log(this.router.url,"TeamConfig >>>>>>>>>>>>>..  ",TeamConfig);
  //   console.log("Paramenter >>>>>>>>>>",this.router.getCurrentNavigation(),this.route.snapshot.paramMap.get('name'));
  // }


  ngOnInit() {
     this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = params['page'];
        // console.log("Page >>>>>>>>>>>>",this.page);
    console.log("Paramenter >>>>>>>>>>",this.route.snapshot.paramMap.get('name'));
        
      });
      // this.router.p
  }

  ngOnChanges(){
    console.log("Paramenter 3333 >>>>>>>>>>",this.route.snapshot.paramMap.get('name'));

  }
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
