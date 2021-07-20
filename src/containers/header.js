import React from 'react'
import { Header } from '../component'
import  logo  from "../logo.svg"
import * as ROUTES from '../constant/router';

export function HeaderContainer( {children}) {
    return (
        <Header>
          <Header.Frame>
           <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/> 
           <Header.ButtonLink to={ROUTES.SIGN_IN}>SignIn</Header.ButtonLink>
        </Header.Frame>  
        {children}   
        </Header>
    )
}
