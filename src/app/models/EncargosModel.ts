import { EditRowModel } from './EditRowModel';
import { ErrorEncargoModel } from './ErrorEncargoModel';

export class EncargoModel {
    public EncargoId: number;
    public Albaran: string;
    public Destinatario: string;
    public Direccion: string;
    public Poblacion: string;
    public CP: string;
    public Provincia: string;
    public Telefono: string;
    public Observaciones: string;
    public Fecha: string;
    public EditRow: EditRowModel;
    public ValidationErrors: ErrorEncargoModel[];

    constructor() {
        this.EditRow = new EditRowModel();
    }
};