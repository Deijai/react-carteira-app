import { ReactNode } from 'react';
import * as C from './styles';

type ContentHeaderProps = {
    title: string;
    lineColor: string;
    children: ReactNode;
}

export const ContentHeader = ({ title, lineColor, children}: ContentHeaderProps) => {

    return(
        <C.Container>
           <C.TitleContainer lineColor={lineColor}>
           <h1>{ title }</h1>
           </C.TitleContainer>
           <C.Controllers>
                   { children }
           </C.Controllers>
        </C.Container>
    );
}