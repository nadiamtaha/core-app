import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  lat: number = 31.205753  ;
  lng: number = 29.924526;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  markers: marker[] = [
	  {
		  lat: 31.205753,
		  lng: 29.924526,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 30.60427,
		  lng: 32.27225,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 29.205753,
		  lng: 27.924526,
		  label: 'C',
		  draggable: true
	  }
  ]


  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -80
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00ffee'
        },
        {
          saturation: 50
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
