import React from 'react';
import './login.css'
import PolicyView from "./PolicyView";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Redirect
} from "react-router-dom";

const validate = (data) => {
    return Object
        .values(data)
        .filter(e => e !== '').length === 3
}

const LoginUL = () => {

    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataToSend = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            type: 'USER_PASSWORD_AUTH'
        }

        if (validate(dataToSend)) {
            const postOptions = {
                method: 'POST',
                headers: {
                    'environment': 'mock',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            }
            let data = await fetch('https://api.bybits.co.uk/auth/token', postOptions)
                .then(res => res.json())

            history.push(`/login`, [data])
        }
        else {
            alert('please enter a username and password')
        }
    }

    return (<div className={'container'}>
            <div className={'signIn'}>Sign In</div>
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor={'username'}>User Name</label>
                    <input id={'username'} className={'form-input'}></input>
                </div>

                <div className={'form-group'}>
                    <label htmlFor={'password'}>Password</label>
                    <input type={'password'} id={'password'} className={'form-input'}></input>
                </div>


                <div className={'form-group'}>
                     <input  type={'submit'} value={'Log in'} className={'form-input'}></input>
                </div>
            </form>
        </div>
    )
}

export default function Login () {
    return (<Router>
    <Switch>
        <Route exact path="/">
            <Redirect to="/home" />
        </Route>
        <Route path="/home">
            <LoginUL />
        </Route>
        <Route path="/login">
            <PolicyView/>
        </Route>
    </Switch>
</Router>)
}
