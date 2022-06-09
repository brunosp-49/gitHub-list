import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { List } from '../../pages/list/List'
import { Login } from '../../pages/login/Login'

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='/list' element={<List/>}/>
                <Route path='*' element={<div>Error 404 - page is not found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}