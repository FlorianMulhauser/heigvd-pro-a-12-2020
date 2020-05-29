import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // requete
import {FileUploader} from 'ng2-file-upload';

@Injectable({
  providedIn: 'root',
})

export class FilesService {
  private uploader: FileUploader;
  public fileUrl = '/api/file';

  constructor(private http: HttpClient) {
    this.uploader = new FileUploader({url: this.fileUrl + '/upload'});
  }

  public uploadFile() {
    return this.uploader;
  }

  public downloadFile(filename): any {
    return this.http.get(this.fileUrl + '/' + filename, {responseType: 'blob' as 'json'});
  }

  public deleteFile(filename) {
    return this.http.delete(this.fileUrl + '/' + filename);
  }
}
