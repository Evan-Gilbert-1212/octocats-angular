import { Component, OnInit } from '@angular/core';
import { GetOctocatsService } from '../get-octocats.service';
import { IOctocats } from '../octocats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  octocatsData: IOctocats;

  constructor(private _getOctocats: GetOctocatsService) {}

  ngOnInit(): void {
    this._getOctocats.getOctocats().subscribe((data) => {
      this.octocatsData = data;
      console.log(this.octocatsData);
    });
  }
}
