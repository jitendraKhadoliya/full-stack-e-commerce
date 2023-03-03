import { createContext } from "react";

export const Context = createContext();

const AppContext = ({childern})=>{
    return (
    <Context.Provider>
        {childern}
    </Context.Provider>
    )
}

export default AppContext;