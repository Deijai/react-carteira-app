import React from "react";
import * as C from './styles';
import logo from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { Link } from "react-router-dom";
export const Aside = () => {
    return (
        <C.Container>
           <C.Header>
               <C.LogoImg  src={logo} alt="logo" />
               <C.Title>Minha Carteira</C.Title>
           </C.Header>

           <C.MenuContainer>
               <C.MenuItemLink to="dashboard">
                   <MdDashboard />
                    Dashboard
               </C.MenuItemLink>

               <C.MenuItemLink to="list/entry-balance">
                   <MdArrowUpward />
                    Entradas
               </C.MenuItemLink>

               <C.MenuItemLink to="list/exit-balance">
                   <MdArrowDownward />
                    Saídas
               </C.MenuItemLink>

               <C.MenuItemLink to="#">
                   <MdExitToApp />
                    Sair
               </C.MenuItemLink>
           </C.MenuContainer>
        </C.Container>
    );
}
