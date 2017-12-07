import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Http, Response} from '@angular/http';
import { Leader } from '../shared/leader';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeaderService{
    constructor (public http: Http,
    public processHTTPMsgService : ProcessHTTPMsgService) { }

    getLeaders(): Observable<Leader[]> {
        return this.http.get(baseURL + 'leaders')
            .map(res => {return this.processHTTPMsgService.extractData(res)})
            .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }

    getLeader(id: number): Observable<Leader> {
        return this.http.get(baseURL + 'leaders/' + id)
        .map(res => {return this.processHTTPMsgService.extractData(res)})
        .catch(error => {return this.processHTTPMsgService.handleError(error)});

    }

    getFeaturedLeader() : Observable<Leader>{
        return this.http.get(baseURL + 'leaders?featured=true')
        .map(res => {return this.processHTTPMsgService.extractData(res)[0];})
        .catch(error => {return this.processHTTPMsgService.handleError(error);});
    }
}
