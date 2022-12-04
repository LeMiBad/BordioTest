import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './components/App/App'
import './fonts.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  body {
    overflow: hidden;
  }
}
`

root.render(
  <>
    <Global/>
    <App/>
  </>
)

