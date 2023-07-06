import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './pages/ErrorPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <App/>
      </ErrorBoundary>
    </React.StrictMode>
  </BrowserRouter>
)
