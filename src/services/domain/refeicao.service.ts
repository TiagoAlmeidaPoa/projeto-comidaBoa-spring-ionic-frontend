import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { RefeicaoDTO } from "../../models/refeicao.dto";

@Injectable()
export class RefeicaoService {

    constructor(public Http: HttpClient) {

    }

    findAll() : Observable<RefeicaoDTO[]> {
        return this.Http.get<RefeicaoDTO[]>(`${API_CONFIG.baseUrl}/refeicoess/todos`)
    }
}