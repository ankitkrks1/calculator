import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import Cal from './Cal'

const App = () => (
  <div className="contaier">
    <Cal/>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
