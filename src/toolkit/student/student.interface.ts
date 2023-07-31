export interface IStudent {
    id?: number,
    ten: string,
    namsinh: number
}

export interface IStudentState {
    students: IStudent[]
}