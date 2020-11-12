import { urlAddress } from './../constants/urlAddress';
import { AddressByCEP } from "../constants/types";
import axios from "axios";

export async function getAddressFromCEP(
    cep: number
    ): Promise<AddressByCEP> {
    
        const getAddress = await axios.get(`${urlAddress}/${cep}/json`)

        return {
            logradouro: getAddress.data.logradouro,
            bairro: getAddress.data.bairro,
            cidade: getAddress.data.localidade,
            estado: getAddress.data.uf
        }
}
