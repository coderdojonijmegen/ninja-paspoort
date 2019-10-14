import {Component, OnInit, ViewChild} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Ninja-paspoort';
  debugNeeded="false";
  canvasWidth="500";
  canvasHeight="500";
  stopAfterScan="true";
  updateTime="500";

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let chosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            chosenDev = dev;
            break;
          }
        }
        if (chosenDev) {
          this.qrScannerComponent.chooseCamera.next(chosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);

    });
  }
}
