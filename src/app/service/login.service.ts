import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable(
    {
        providedIn: "root"
    }
)

export class LoginService
{
    constructor(private httpClient: HttpClient) {
        
        
    }
    private readonly baseUrl = environment["endPoint"];

    LoginUsuario(objeto:any)
    {
        return this.httpClient.post<any>(`${this.baseUrl}/users`, objeto);
    }
}