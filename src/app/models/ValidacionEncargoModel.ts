import { EncargoModel } from './EncargosModel';
import { ErrorEncargoModel } from './ErrorEncargoModel';

export class ValidacionEncargoModel {
    public Encargo: EncargoModel;
    public ErroresValidacion: ErrorEncargoModel[];
}