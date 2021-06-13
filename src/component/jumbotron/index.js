import React from 'react'

import {Inner, Pane, Image,Container,Item,SubTitle,Title} from './styles/jumbotron'

 const Jumbotron = ({children, direction='row', ...restProps}) => {
    return (
        <Inner direction={direction}>
         {children}
        </Inner> 
    )
}


Jumbotron.Container= function JumbotronContainer({children, ...restProps}){
   return <Container {...restProps}> {children} </Container>
}


Jumbotron.Pane= function jumbotronPane({children, ...restProps}){
  return  <Pane> {children} </Pane>
}

Jumbotron.Item= function jumbotronItem({children, ...restProps}){
   return <Item> {children} </Item>
}
Jumbotron.Title= function jumbotronTitle({children, ...restProps}){
   return <Title> {children} </Title>
}
Jumbotron.SubTitle= function jumbotronSubTitle({children, ...restProps}){
   return <SubTitle> {children} </SubTitle>
}

Jumbotron.Image= function jumbotronImage({children, ...restProps}){
   return  <Image {...restProps}></Image>
}


export default Jumbotron
