import {
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Breeds } from '../pages/BreedsPage/Breeds'
import { Gallery } from '../pages/GalleryPage/Gallery'
import { Voting } from '../pages/VotingPage/Voting'
import { FavouritesPage } from '../pages/FavouritesPage'
import { LikesPage } from '../pages/LikesPage'
import { DislikesPage } from '../pages/DislikesPage'
import { BreedsInfoPage } from '../pages/BreedsInfoPage/BreedsInfoPage'
import { SearchPage } from '../pages/SearchPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='/breeds'
                element={<Breeds />}
            />
            <Route
                path='/breeds/:id'
                element={<BreedsInfoPage />}
            />
            <Route
                path='/gallery'
                element={<Gallery />}
            />
            <Route
                path='/voting'
                element={<Voting />}
            />
            <Route
                path='/favourites'
                element={<FavouritesPage />}
            />
            <Route
                path='/likes'
                element={<LikesPage />}
            />
            <Route
                path='/dislikes'
                element={<DislikesPage />}
            />
            <Route
                path='/search'
                element={<SearchPage />}
            />
            <Route
                path='/search/:id'
                element={<BreedsInfoPage />}
            />
            <Route
                path='*'
                element={<Navigate to='/' />}
            />
        </Route>
    )
)

export const Routing = () => {
    return <RouterProvider router={router} />
}
