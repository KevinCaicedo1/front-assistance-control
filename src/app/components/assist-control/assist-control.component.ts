import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as io from 'socket.io-client';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
];

@Component({
  selector: 'app-assist-control',
  templateUrl: './assist-control.component.html',
  styleUrls: ['./assist-control.component.css']
})
export class AssistControlComponent implements OnInit {

  // Socket
  socket: any;
  videoStream: any;
  videoStreamReturned: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;



  constructor(private sanitizer: DomSanitizer) {
    this.socket = io.io('http://127.0.0.1:5000');

  }


  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      this.videoStream = stream;
      // convert media stream to videoframe
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      // enviar frame por frame
      setInterval(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(video, 0, 0, 640, 480);
        const data = canvas.toDataURL('image/jpeg', 0.5);
        this.socket.emit('recognize-request', data);
      }
        , 1000 / 30);



    }
    ).catch((err) => {
      console.log(err);
    }
    );

    this.socket.on('recognize-response', (data: any) => {
      this.videoStreamReturned = data;
      const video = document.getElementById('video');


    }
    );
  }

  // al cambiar de componente se cierra la camara
  ngOnDestroy(): void {
    this.videoStream.getTracks()[0].stop();
  }


}
