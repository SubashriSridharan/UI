import {Component} from '@angular/core';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [MessageService]
})
export class FileUploadComponent {

  uploadedFiles: any[] = [];
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        alert('Uploaded Successfully');
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}
