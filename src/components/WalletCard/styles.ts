import styled from "styled-components";

type WalletCardContainerProps = {
    color: string;
}
export const Container = styled.div<WalletCardContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 150px;
    margin: 10px 0;
    border-radius: 7px;
    color: ${props => props.theme.colors.white};
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
`;
export const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
`;
export const Subtitle = styled.small`
    font-size: 12px;
    position: absolute;
    bottom: 10px;
`;
export const Amount = styled.h3``;
export const Icon = styled.img`
    position: absolute;
    height: 110%;
    opacity: .4;
    top: -10px;
    right: -30px;
`;