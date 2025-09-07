import { createRoot } from 'react-dom/client';
import './main.css';

import { DynamicRoutes } from '9-Routing/DynamicRoutes/DynamicRoutes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BASE_PATH, RouterPath } from 'config/RouterPath';

import { NotFound } from 'components/MasterDetail/NotFound';
import { BreedsList } from '9-Routing/DynamicRoutes/BreedList';
import { Breed } from '9-Routing/DynamicRoutes/Breed';

createRoot(document.getElementById('root')!).render(
      <BrowserRouter basename={BASE_PATH}>
            <Routes>
                  <Route path={RouterPath.DYNAMIC_ROUTES} element={<DynamicRoutes />}>
                        <Route path='breeds' element={<BreedsList/>}>
                              <Route path=':breedId' element={<Breed/>}/>
                        </Route>
                  </Route>
                  
            </Routes>
      </BrowserRouter>

);