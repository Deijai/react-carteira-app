import React, { ReactNode } from "react";
import * as C from './styles';


type ContentProps = {
    children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
    return (
        <C.Container>
          { children }
        </C.Container>
    );
}
