import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import GagInterface from './components/GagInterface'

function App() {
  return (
    <Provider store={store}>
      <GagInterface />
    </Provider>
  )
}

export default App
