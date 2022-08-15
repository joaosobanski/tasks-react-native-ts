import React from 'react';

export interface ITasksContext {
    id: number,
    title: string
}

export const TasksContext = React.createContext<ITasksContext>({} as ITasksContext);