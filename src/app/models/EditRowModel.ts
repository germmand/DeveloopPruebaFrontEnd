// Éste modelo servirá para indicarle a la aplicación sobre qué campo de la fila de quiere editar.
export class EditRowModel {
    public EditingEncargoId: boolean;
    public EditingAlbaran: boolean;
    public EditingDestinatario: boolean;
    public EditingDireccion: boolean;
    public EditingPoblacion: boolean;
    public EditingCP: boolean;
    public EditingProvincia: boolean;
    public EditingTelefono: boolean;
    public EditingObservaciones: boolean;
    public EditingFecha: boolean;

    constructor() {
        this.EditingEncargoId       = false;
        this.EditingAlbaran         = false;
        this.EditingDestinatario    = false;
        this.EditingDireccion       = false;
        this.EditingPoblacion       = false;
        this.EditingCP              = false;
        this.EditingProvincia       = false;
        this.EditingTelefono        = false;
        this.EditingObservaciones   = false;
        this.EditingFecha           = false;
    }
};