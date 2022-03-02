import React from "react";
import * as C from './styles';


type MovimentCardProps = {
    cardColor: string;
    tagColor: string;
    color: string;
    title: string;
    subtitle: string;
    amount: string;
}

export const MovimentCard = ({cardColor, tagColor, color, title, subtitle, amount}: MovimentCardProps) => {
    return (
        <C.Container color={cardColor}>
            <C.Tag color={tagColor}/>
            <C.Body>
                <C.Title color={color}>{title}</C.Title>
                <C.Subtitle>{subtitle}</C.Subtitle>
            </C.Body>
            <C.Amount>{amount}</C.Amount>
        </C.Container>
    );
}