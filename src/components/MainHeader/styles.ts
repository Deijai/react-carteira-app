import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;
    display: flex;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;
export const Welcome = styled.h4``;
export const UserName = styled.span``;