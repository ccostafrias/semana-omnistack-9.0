import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from '../../services/api'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/sessions', { email })

        const { _id } = response.data

        localStorage.setItem('user', _id)

        navigate('/dashboard')
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
                </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <button type="submit" className="bttn">Entrar</button>
            </form>
        </>
    )
}