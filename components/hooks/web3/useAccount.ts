

import useSWR from "swr";

//deps -> provider, ethereum, contract (web3State)

export const hookFactory = (deps: any) => (params: any) => {
  const swrRes =  useSWR("web3/useAccount", () => {
     console.log(deps);
        return "Test User"
    })
    return swrRes;
}

export const useAccount = hookFactory({ethereum: null, provider: null});