import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import TodoItem from "./TodoItem";

const App = () => {
    const todos = ["Buy milk", "Walk the dog", "Finish project"];
    
    //EDIT AND DELETE FUNCTIONALITY HERE...
    
    return (
        <div>
            <h1>My Todo List:</h1>
            <hr/>
            <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} />
            ))}
            </ul>
        </div>
    );
};




// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
