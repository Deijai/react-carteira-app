import styled from "styled-components";

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`;
export const Title = styled.h2`
    margin-bottom: 20px;
`;
export const AsideLeft = styled.aside`
    padding: 30px 20px;
`;
export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 175px;
    overflow-y: scroll;
    padding: 5px;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Legend = styled.li`
   display: flex;
   align-items: center;
   margin-bottom: 7px;
`;

type PercentProps = {
    color: string;
}

export const Percent = styled.div<PercentProps>`
   background-color: ${props => props.color};
   width: 50px;
   height: 50px;
   border-radius: 5px;
   font-size: 12px;
   line-height: 50px;
   text-align: center;
`;
export const Indicator = styled.span`
    margin-left: 5px;
`;

export const AsideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;