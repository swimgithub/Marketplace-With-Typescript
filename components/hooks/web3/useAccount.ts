
import { CryptoHookFactory } from "../../../types/hooks";
import useSWR from "swr";

//deps -> provider, ethereum, contract (web3State)

export const hookFactory: CryptoHookFactory = (deps: any) => (params: any) => {
  const swrRes =  useSWR("web3/useAccount", () => {
     console.log(deps);
        return "Test User"
    })
    return swrRes;
}

export const useAccount = hookFactory({ethereum: undefined, provider: undefined, contract: undefined});