import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

type TitleProps = {
    lineColor: string;
}

export const TitleContainer = styled.div<TitleProps>`
     > h1 {
        color: ${props => props.theme.colors.white};
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor};
        }
    }
`;
export const Controllers = styled.div`
    display: flex;
`;