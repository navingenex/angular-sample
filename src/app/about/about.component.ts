import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {
    constructor(private title:Title,private meta:Meta) { }

    ngOnInit() {
        this.title.setTitle('About this app');
        this.meta.updateTag({name:'og:url',content:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg'});
        this.meta.updateTag({ name: 'description', content: 'The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.' })
     }
}