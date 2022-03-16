import React from 'react'
import { Routes,  Route } from 'react-router-dom'
import Film from '../Film/Film'
import NaoEncontrado from '../component/NaoEncontrado'
import Main from '../pages/Main'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="genrer" element={<Main />} />
                <Route path="/genrer/:genrer" element={<Main />} />
                <Route path="film/:id" element={<Film />} />
                <Route path="*" element={<NaoEncontrado />} />
            </Routes>
        </>
    )
}

export default Router
