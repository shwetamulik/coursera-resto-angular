import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
leaders:Leader[];
onSelectedLeader:Leader;
  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.leaders=this.leaderService.getLeaders();

  }
onSelected(leader:Leader){
this.onSelectedLeader=leader
}
}
