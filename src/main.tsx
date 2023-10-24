import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Model, createServer } from 'miragejs'

createServer({
    models: {
        tarefas: Model
    },
    routes() {
        this.get('/api/tarefas', () => {
            return this.schema.all('tarefas')
        })
    }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
