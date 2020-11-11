export type AuthenticationData = {
    id: string,
    role: string
};

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: string,
};

export type AddressData = {
    user_id: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cpf: number,
    cidade: string,
    estado: string
};

export type AddressByCEP = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}