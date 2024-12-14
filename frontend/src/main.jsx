// System
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import './index.css'

// Redux
import { Provider } from 'react-redux';
import store from './redux/Store';

// Components
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
