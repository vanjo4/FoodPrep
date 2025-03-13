import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const contextValue={

    }
    return(
        <StoreContext.Provider value={contextValue}>
            <component2/>
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;