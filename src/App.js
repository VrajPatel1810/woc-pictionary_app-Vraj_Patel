//importing css
import './App.css';

//importing router
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

import HomePage from './homepage';
import RootLayout from './rootLayout.js'
import Room from './room.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/room' element={<Room/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
