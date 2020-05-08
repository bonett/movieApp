import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Output() onNewMovie = new EventEmitter<Movie>();

  public movieForm: FormGroup;
  public pathFile: any;

  constructor(
    private _changeDetector: ChangeDetectorRef,
  ) {
    this.movieForm = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      'release': new FormControl(this.currentDate(), Validators.required),
      'image': new FormControl(null, Validators.required),
      'description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(500)]))
    });
  }

  ngOnInit(): void { }

  get title() { return this.movieForm.get('title'); }
  get release() { return this.movieForm.get('release'); }
  get image() { return this.movieForm.get('image'); }
  get description() { return this.movieForm.get('description'); }

  /**
   * Allows get image selected
   * @param event
   */
  onFileChange(event) {

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {

      const [file] = event.target.files;

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.pathFile = reader.result;
      };

      this._changeDetector.markForCheck();
    }
  }

  /**
   * Allows submit new movie
   * @param null
   */
  onSubmitMovie() {
    const form = this.movieForm && this.movieForm.value;
    const payload = {
      id: uuid(),
      title: form.title,
      release: form.release,
      image: this.pathFile,
      description: form.description
    };
    this.onNewMovie.emit(payload);
  }

  /**
   * Allows get current date
   */
  private currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

}
