import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Homepage from './Components/Home'
import SingleMovie from './Components/SingleMovie'
import TopratedMovie from './Components/TopRated'
import UpcomingMovie from './Components/UpcomingMovie'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/SingleMovie" component={SingleMovie} />
      <Route path="/TopratedMovie" component={TopratedMovie} />
      <Route path="/UpcomingMovie" component={UpcomingMovie} />
    </Switch>
  </BrowserRouter>
)
export default App
