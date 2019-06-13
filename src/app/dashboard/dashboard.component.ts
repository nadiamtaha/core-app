import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  markers: marker[] = [
	  {
		  lat: -34.397,
		  lng: 150.644,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: -34.373858,
		  lng: 150.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: -34.723858,
		  lng: 150.895982,
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
