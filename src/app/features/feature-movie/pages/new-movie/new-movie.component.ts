import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {

  public movieForm: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private _movieService: MovieService,
    private _router: Router
  ) {

    this.movieForm = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      'release': new FormControl('', Validators.required),
      'photo': new FormControl(null, Validators.required),
      'description': new FormControl('', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(500)]))
    });
  }

  get title() { return this.movieForm.get('title'); }
  get release() { return this.movieForm.get('release'); }
  get photo() { return this.movieForm.get('photo'); }
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
          moviePhoto: reader.result
        });

        this.cd.markForCheck();
      };
    }
  }

  onSubmitMovie() {

    const form = this.movieForm && this.movieForm.value;

    const payload = {
      title: form.title,
      release: form.release,
      photo: form.photo,
      description: form.description
    };

    this._movieService.createMovie(payload).subscribe((response)=>{
      this._router.navigate(['/home']);
    });


  }

}
