import React from 'react'
import { Header } from '../component'
import  logo  from "../logo.svg"

export function HeaderContainer() {
    return (
        <Header>
          <Header.Frame>
           <Header.Logo to={"/"} alt="Netflix" src={logo}/> 
           <Header.ButtonLink>SignIn</Header.ButtonLink>
        </Header.Frame>  
        </Header>
    )
}
