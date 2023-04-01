import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new" element={<New />} />
            </Switch>
        </Router>
    )
}