import { IState } from "./IState";
import { Action } from "./reducer/IAction";
import { Dispatch } from "react";

export interface IContext {
    state: IState;
    dispatch?: Dispatch<Action>;
}