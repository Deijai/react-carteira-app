import React from "react";
import CountUp from 'react-countup';
import * as C from './styles';
import up from '../../assets/arrow-up.svg';
import down from '../../assets/arrow-down.svg';
import dollar from '../../assets/dollar.svg';

type WalletCardProps = {
    title: string;
    amount: number;
    subtitle: string;
    color: string;
    icon: 'dollar' | 'up' | 'down';
}

export const WalletCard = ({title, amount, subtitle, color, icon}: WalletCardProps) => {
    const iconSelected = (icon: string) => {
            if(icon === 'dollar'){
                return dollar;
            }

            if(icon === 'up'){
                return up;
            }

            if(icon === 'down'){
                return down;
            }
    }
    return (
        <C.Container color={color}>
            <C.Title>{title}</C.Title>
            <CountUp start={0} prefix="R$ " separator="." decimal="," decimals={2} end={amount} delay={0}>
            {({ countUpRef }) => (
                <C.Amount ref={countUpRef}>{amount}</C.Amount>
            )}
            </CountUp>
            
            <C.Subtitle>{subtitle}</C.Subtitle>
            <C.Icon src={iconSelected(icon)} alt="Saldo em carteira" />

        </C.Container>
    );
}