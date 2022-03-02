import styled from "styled-components";

type ContainerProps = {
    color: string;
}

export const Container = styled.li<ContainerProps>`
    background-color: ${props => props.color};
    list-style: none;
    border-radius: 3px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }
`;

type TagProps = {
    color: string;
}

export const Tag = styled.div<TagProps>`
    background-color: ${props => props.color};
    position: absolute;
    width: 10px;
    height: 75%;
    left: 0;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
`;
type TitleProps = {
    color: string;
}

export const Title = styled.span<TitleProps>`
    font-size: 22px;
    font-weight: bold;
    color: ${props => props.color};
`;
export const Subtitle = styled.small``;
export const Amount = styled.h3``;