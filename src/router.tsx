import {createBrowserRouter} from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { ExploreGods } from './pages/ExploreGods'
import { CreateGod } from './pages/CreateGod'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ExploreGods/>
            },
            {
                path: "gods/create",
                element: <CreateGod/>
            }
        ],
    }
])