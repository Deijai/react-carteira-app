import React, { useMemo } from "react";
import emoji from "../../utils/emoji";
import * as C from './styles';
import { Toggle } from './../Toggle/index';

export const MainHeader = () => {

    const emojis = useMemo( () => {
        const index = Math.floor(Math.random() * emoji.length);
        return emoji[index];
    }, []);


    return (
        <C.Container>
          <Toggle />

           <C.Profile>
               <C.Welcome>Bem vindo, {emojis}</C.Welcome>
               <C.UserName>Deijaí</C.UserName>
           </C.Profile>
        </C.Container>
    );
}
