import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
`;

type ButtonActionProps = {
    color: string;
    frequency: boolean;
}
export const ButtonAction = styled.input<ButtonActionProps>`
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-bottom: 10px solid ${props => props.color};
    transition: all .3s;
    transform: translateX(10px);
    margin-bottom: 30px;
    cursor: pointer;
    opacity: ${props => props.frequency  ? 1 : .3};

    &:hover {
        opacity: .7;
    }
`;
