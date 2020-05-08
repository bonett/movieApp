import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {

  public movieForm: FormGroup;
  public movies: Array<Movie> = [];

  constructor(
    private cd: ChangeDetectorRef,
    private _movieService: MovieService,
    private _router: Router
  ) {

    this.movieForm = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      'release': new FormControl('', Validators.required),
      'image': new FormControl(null, Validators.required),
      'description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(500)]))
    });
  }

  get title() { return this.movieForm.get('title'); }
  get release() { return this.movieForm.get('release'); }
  get image() { return this.movieForm.get('image'); }
  get description() { return this.movieForm.get('description'); }

  ngOnInit(): void {

  }

  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.movieForm.patchValue({
          imageMovie: this.getBase64Image(reader.result)
        });

        this.cd.markForCheck();
      };
    }
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

  onSubmitMovie() {

    const form = this.movieForm && this.movieForm.value;

    const payload = {
      id: uuid(),
      title: form.title,
      release: form.release,
      image: form.image,
      description: form.description
    };

    console.log(this.movies, payload);

    this.movies.push(payload);
    this._movieService.createMovie(payload);
    this._router.navigate(['/']);
  }

}
