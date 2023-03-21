import { createContext, useContext, FC, useReducer } from "react";
import { appReducer } from "./reducer"
import { IContext } from "./IContext";
import { IState } from "./IState";

const initialState: IState = {
    isLoading: false,
};

const AppContext = createContext<IContext>({ state: initialState });

//@ts-ignore
export const AppProvider: FC = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}} >
            { children } 
        </AppContext.Provider>
    )
}

export const useAppContext = (): IContext =>{
    return useContext(AppContext);
}
