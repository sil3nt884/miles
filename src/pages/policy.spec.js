import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import PolicyView from "./PolicyView";
import { createMemoryHistory } from 'history'
import { Router } from "react-router";




test('check that page renders with history state', async ()=> {

    const history = createMemoryHistory()
    history.push('/login', [{access_token : 'aaaaa'}])


    render(
        <Router  history={history}>
            <PolicyView  />
        </Router>
    )
    const myPolicy = await screen.findByText('My Policy')
    expect(myPolicy).toBeInTheDocument()
    expect(history.location.state[0]).toEqual({"access_token" : 'aaaaa'})


})
