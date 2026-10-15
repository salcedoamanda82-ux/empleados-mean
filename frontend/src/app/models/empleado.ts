export interface Empleado {
    _id?: string;
    nombres: string;
    apellidos: string;
    cargo: string;
    area: string;
    salario: number;
    email: string;
    createdAt?: string;
    updateAt?:string;
}
