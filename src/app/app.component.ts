import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isTemplateSelected: boolean = false;
  isOpenPopup: boolean = false;
  selectedSrc: string = '';
  formdata: any = [];
  savedPost: any = [];
  templates: any = [
    {
      id: 1,
      src: '../assets/Templates/Template_1.jpg',
    },
    {
      id: 2,
      src: '../assets/Templates/Template_2.jpg',
    },
    {
      id: 3,
      src: '../assets/Templates/Template_3.jpg',
    },
    {
      id: 4,
      src: '../assets/Templates/Template_4.jpg',
    },
    {
      id: 5,
      src: '../assets/Templates/Template_5.jpg',
    },
    {
      id: 6,
      src: '../assets/Templates/Template_6.jpg',
    },
  ];

  ngOnInit() {
    this.formdata = new FormGroup({
      offerHeading: new FormControl(''),
      offerDiscount: new FormControl(''),
    });
  }

  selectTemplate(Src: string) {
    this.isTemplateSelected = true;
    this.selectedSrc = Src;
  }

  clickPreview(Value: any = '') {
    this.isOpenPopup = !this.isOpenPopup;
    console.log(Value);
  }

  saveTemplate() {
    let obj = {
      src: this.selectedSrc,
      offerHeading: this.formdata.value.offerHeading,
      offerDiscount: this.formdata.value.offerDiscount,
    };

    if (localStorage.getItem('savedPost')) {
      this.savedPost = JSON.parse(localStorage.getItem('savedPost') || '{}');
      this.savedPost.push(obj);
      localStorage.setItem('savedPost', JSON.stringify(this.savedPost));
    } else {
      this.savedPost.push(obj);
      localStorage.setItem('savedPost', JSON.stringify(this.savedPost));
    }
  }
}
