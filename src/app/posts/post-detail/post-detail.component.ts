import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/model/posts';

@Component({
    selector: 'app-post-detail',
    templateUrl: 'post-detail.component.html',
})

export class PostDetailComponent implements OnInit {
    constructor(private route:ActivatedRoute,private title:Title,private meta:Meta) {
        
     }
    public post:Posts=this.route.snapshot.data.post;
    
    ngOnInit() { 
        this.title.setTitle(this.post.title);
        this.meta.updateTag({name:'description', content:this.post.body})
    }
}