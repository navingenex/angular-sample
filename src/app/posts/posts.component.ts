import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Posts } from '../model/posts';
import { AppService } from '../services/app.service';

@Component({
    selector: 'app-posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
    posts:Posts[]=[]
    constructor(private appService:AppService,private title:Title,private meta:Meta) { 
        this.title.setTitle('All posts');
        this.meta.updateTag({name:'description',content:'THis is post page for all post'})
    }
    
    ngOnInit() {
        this.appService.getPosts().subscribe((posts:any) => {this.posts=posts})
        
     }
}