export interface Todo {
    id: number|string;
    title: string;
    description?: string;
    done: boolean;
}

export type Todos = Todo[];