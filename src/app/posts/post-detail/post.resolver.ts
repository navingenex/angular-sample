import { Posts } from '../../model/posts';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Observable<any>> {
    constructor(private http:HttpClient){}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.http.get(`${environment.apiUrl}posts/${route.params.id}`,{reportProgress: true})
    }
}