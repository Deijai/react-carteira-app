import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.grey}
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
`;
export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;
export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
    font-weight: 300;
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
        text-decoration: underline;
    }
    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`;