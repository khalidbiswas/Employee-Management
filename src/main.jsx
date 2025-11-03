import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from '../src/assets/context/AuthContext.jsx'
import TaskContext from '../src/assets/context/TaskContext.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App></App>
      </TaskContext>
    </AuthContext>
  </StrictMode>
)
