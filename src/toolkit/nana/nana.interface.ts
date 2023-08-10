export interface INana {
    id?: number,
    ten: string,
    namsinh: number
}

export interface INanaState {
    nanas: INana[],
    nana : INana
}
export interface SearchPayload {
    searchTerm: string;
    nanas: INana[];
}