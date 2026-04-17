import {Navigate, Outlet} from 'react-router-dom'
import { useAppSelector } from '../redux/hooks/hooks'

export default function ProtectedRoute() {
    const {currentUser} = useAppSelector((state) => state.auth)

    if (!currentUser) {
        return <Navigate to={'/login'} replace/>
    }

    return <Outlet/>
}
