import React from 'react'
import { Header,Profiles } from '../component'
import * as ROUTES from '../constant/router'
import logo from '../logo.svg';


export function SelectProfileContainer({user,setProfile}) {
    return (
        <>
         <Header>
          <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
          </Header.Frame>   
        </Header>  

        <Profiles>
           <Profiles.Titles>Who is watching</Profiles.Titles> 
           <Profiles.List>
             <Profiles.User>
                <Profiles.Picture src={user.photoURL}/>
                <Profiles.Name>{user.displayName}</Profiles.Name>
             </Profiles.User>
           </Profiles.List>
        </Profiles> 
        </>
    )
}
