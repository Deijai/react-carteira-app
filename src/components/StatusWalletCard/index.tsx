import React, { useMemo } from "react";
import * as C from './styles';

type StatusWalletCardProps = {
    title: string;
    description: string;
    message: string;
    icon: string;
}

export const StatusWalletCard = ({title, description, message, icon}: StatusWalletCardProps) => {

    return (
        <C.Container>
            <C.Header>
                <C.Title> {title} <C.Icon src={icon} alt="Status" /></C.Title>
                <C.Description> {description} </C.Description>
            </C.Header>
            <C.Footer>
                <C.Message> {message} </C.Message>
            </C.Footer>
        </C.Container>
    );
}