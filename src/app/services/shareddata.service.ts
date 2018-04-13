import { Injectable } from '@angular/core';

// Éste servicio se usará para pasar grandes cantidades de datos entre componentes de diferentes rutas.
@Injectable()
export class SharedDataService<T> {
    private data: T;

    constructor() {
        this.data = null;
    }

    putData(data: T) {
        this.data = data;
    }

    fetchData(): T {
        return this.data;
    }
}