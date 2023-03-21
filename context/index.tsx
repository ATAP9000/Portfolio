import { createContext, useContext, FC, useReducer } from "react";
import { appReducer } from "./reducer"
import { IContext } from "./IContext";
import { IState } from "./IState";

const initialState: IState = {
    isLoading: false,
};

type Props = {
    children?: React.ReactNode
  };

const AppContext = createContext<IContext>({ state: initialState });

export const AppProvider: FC<Props> = ({children}): JSX.Element => {
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
