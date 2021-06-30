import React,{useState,useContext,createContext} from 'react';
import { Container,Frame,Inner,Title,Item,Body,Header } from './styles/accordion';

const toggleContext= createContext();

export default function Accordion({children, ...restProps}){
    return (
        <div>
        <Container {...restProps}>
           <Inner>{children}</Inner>
        </Container>
        </div>
    );
}


Accordion.Title= function AccordionTitle({children, ...restProps}){
  
   return  <Title> {children} </Title>
}

Accordion.Frame= function AccordionFrame({children, ...restProps}){
  
    return  <Frame> {children} </Frame>
 }

 Accordion.Item= function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggle]= useState(false);
 return(
    <toggleContext.Provider value={{toggleShow, setToggle}} >
      <Item  {...restProps}> {children} </Item>
    </toggleContext.Provider>
 )
 }

 Accordion.Header= function AccordionHeader({children, ...restProps}){
    const {toggleShow, setToggle}= useContext(toggleContext);
     
    return  <Header onClick={()=>setToggle(!toggleShow)}> {children}
     {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    
     </Header>
 }

  

 
 Accordion.Body= function AccordionBody({children, ...restProps}){
    const { toggleShow } = useContext(toggleContext);

    return  toggleShow ? <Body {...restProps}> {children} </Body> : null;
 }


  




