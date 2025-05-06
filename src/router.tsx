import {createBrowserRouter} from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { ExploreGods } from './pages/ExploreGods'
import { CreateGod } from './pages/CreateGod'
import { loader as getAllGods } from './pages/ExploreGods'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ExploreGods/>,
                loader: getAllGods
            },
            {
                path: "gods/create",
                element: <CreateGod/>
            }
        ],
    }
])