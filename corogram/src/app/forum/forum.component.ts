import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {saveAs} from 'file-saver';
import {FileUploader} from 'ng2-file-upload';
import {RandomColorService} from '../_service/random-color/random-color.service';
import {SseService} from '../_service/sse/sse.service';
import {Course} from '../_service/course/course';
import {FilesService} from '../_service/file/file.service';
import {ModalService} from '../_service/modal/modal-service.service';
import {ForumMessage} from '../_service/forum/forum.message';
import {ForumService} from '../_service/forum/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {

  @Input() public course: Course;
  public messages: ForumMessage[];
  public form: FormGroup;

  public uploader: FileUploader;

  public hasBaseDropZoneOver: any;
  public bodyText: String;






  constructor(public fb: FormBuilder, private forumService: ForumService,
              private randomColorService: RandomColorService, private fileService: FilesService,
              private sseService: SseService, private modalService: ModalService) {
    this.form = this.fb.group({
      title: [''],
      content: [''],
      course_id: [''],
      author: [''],
      upVote: 0,
      downVote: 0,
      color: [''],
      fileName: [''],
    });
    this.uploader = fileService.uploadFile();
  }

  public ngOnInit(): void {
    this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = this.updateMessage(data));
    this.sseService.getServerSentForumEvent().subscribe((datas) => {
      this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = this.updateMessage(data));
    });
  }
  public ngOnChanges(changes: SimpleChanges) {
    this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages =  this.updateMessage(data));
  }

  public submitForm() {
    console.log(this.messages);
    this.form.patchValue({course_id: this.course._id});
    this.form.patchValue({author: JSON.parse(localStorage.getItem('userInfo')).name});
    this.form.patchValue({color: this.randomColorService.getColor()});
    if (this.uploader.queue.length !== 0) {

      if (this.uploader.queue[0]._file.size < (20 * 1024 * 1024)) {
        this.form.patchValue({fileName: this.uploader.queue[0]._file.name});
        this.uploader.authToken = localStorage.getItem('currentUser');
        this.uploader.uploadAll();
      } else {
        this.bodyText = 'file size:' + (this.uploader.queue[0]._file.size / 1048576) + 'MB  size max 16M ';
        this.openModal('max-size');
        this.uploader.queue[0].remove();
      }
    }

    console.log(this.form.value);
    this.forumService.addMessage(this.form.value).subscribe((data) => {
      console.log(data);
      this.uploader.queue[0].remove();
    });
  }

  public deleteMessage(forumMessage: ForumMessage) {

    if (forumMessage.fileName) {
      this.fileService.deleteFile(forumMessage.fileName).subscribe((data) => console.log(data));
    }

    this.forumService.deleteMessage(forumMessage).subscribe((data) => {
      this.messages = this.messages.filter((c) => c !== forumMessage);
    });

  }

  public upVote(forumMessage: ForumMessage) {
    forumMessage.upVote++;
    this.forumService.updateMessageVote(forumMessage).subscribe((data) => this.updateMessage(this.messages));

  }

  public downVote(forumMessage: ForumMessage) {
    forumMessage.downVote++;
    this.forumService.updateMessageVote(forumMessage).subscribe((data) => this.updateMessage(this.messages));

  }

  public downloadFile(filename) {
    this.fileService.downloadFile(filename).subscribe(
      (res) => {
       saveAs(res, filename);
      },
    );
  }

  public openModal(id: string) {
    this.modalService.open(id);
  }

  public closeModal(id: string) {
    this.modalService.close(id);
  }

  private updateMessage(data: ForumMessage[]) {

    data.sort((a, b) => {
      if ((a.upVote - a.downVote) > (b.upVote - b.downVote)) {
        return -1;
      }
      if ((a.upVote - a.downVote) < (b.upVote - b.downVote)) {
        return 1;
      }
      return 0;
    });

    return data;

  }


}

