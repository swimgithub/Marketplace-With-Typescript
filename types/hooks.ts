import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";
import { type } from "os";
import { SWRResponse } from "swr";

export type Web3Dependencies = {
    provider: providers.Web3Provider;
    contract: Contract;
    ethereum: MetaMaskInpageProvider;
}

// export type CryptoHookFactory = {
//     (d: Partial<Web3Dependencies>): CryptoHandlerHook
// }

// export type CryptoHandlerHook = (params: string) => CryptoSWRResponse 

// export type CryptoSWRResponse = SWRResponse;



export type CryptoHookFactory<D = any, P = string> = {
    (d: Partial<Web3Dependencies>): (params: P) => SWRResponse<D> 
}
