import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AppService {
    apiUrl:string=environment.apiUrl;
    constructor(private http:HttpClient) { }
    

    getPosts(){
        return this.http.get(`${this.apiUrl}posts`);
    }
    
}