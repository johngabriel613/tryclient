import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const queryclient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
