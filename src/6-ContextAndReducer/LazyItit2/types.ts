export type Matrix = number[][];

export enum ActionType {
    SORT_ASC = 'SORT_ASC',
    SORT_DESC = 'SORT_DESC',
    SHUFFLE = 'SHUFFLE',
    REMOVE_ROW = 'REMOVE_ROW',
}

export interface Action {
    type: ActionType;
    payload?:any;
}