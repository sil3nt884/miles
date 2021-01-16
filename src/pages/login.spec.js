import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Login from "./login";

test('check that login page has rendered', async ()=> {
     render(<Login></Login>)
     const signIn = await screen.findByText('Sign In')
    expect(signIn).toBeInTheDocument()

})

