import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-capture-person',
  templateUrl: './capture-person.component.html',
  styleUrls: ['./capture-person.component.css']
})
export class CapturePersonComponent implements OnInit {
  // Socket
  socket: any;
  videoStream: any;
  videoStreamReturned: any;


  // Formulario para ingreso de cedula
  form = new FormGroup({
    cedula: new FormControl<string>('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  });
  isAccepted = false;
  onAccept() {
    this.isAccepted = true;
    console.log(this.form?.get('cedula')?.value);
  }







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
        this.socket.emit('stream-request', data);
      }
      , 1000 / 30);



    }
    ).catch((err) => {
      console.log(err);
    }
    );

    this.socket.on('stream-response', (data: any) => {
      this.videoStreamReturned = data;
      const video = document.getElementById('video');
      
      
    }
    );
  }


}