import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-user-checkin',
  templateUrl: './user-checkin.component.html',
  styleUrls: ['./user-checkin.component.scss']
})
export class UserCheckin {
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasCameras = false;
  hasPermission: boolean;
  qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  constructor() {
  
  }
  
  
  ngOnInit(): void {

      // this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      //     this.hasCameras = true;

      //     console.log('Devices: ', devices);
      //     this.availableDevices = devices;

      //     // selects the devices's back camera by default
      //     // for (const device of devices) {
      //     //     if (/back|rear|environment/gi.test(device.label)) {
      //     //         this.scanner.changeDevice(device);
      //     //         this.selectedDevice = device;
      //     //         break;
      //     //     }
      //     // }
      // });

      // this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      //     console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
      // });

      // this.scanner.permissionResponse.subscribe((answer: boolean) => {
      //   this.hasPermission = answer;
      // });

  }

  handleQrCodeResult(resultString: string) {
      console.log('Result: ', resultString);
      this.qrResultString = resultString;
  }

 
}
