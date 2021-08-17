import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html'
})

export class LandingPageComponent implements OnInit {
    constructor(private title:Title) { }

    ngOnInit() { 
        this.title.setTitle('Welcome to angular sample app');
    }
}