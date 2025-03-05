import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "/src/global.css"
import TodoApp from './Todo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
