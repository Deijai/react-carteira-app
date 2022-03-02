import React, { ReactNode } from "react";
import { Aside } from "../Aside";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import * as C from './styles';

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <C.Grid>
            <MainHeader />
            <Aside />
            <Content>
                { children }
            </Content>
        </C.Grid>
    );
}