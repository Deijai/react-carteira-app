import React, { ChangeEvent, ReactNode } from "react";
import * as C from './styles';

type OptionProps = {
    options: {
        value: string;
        label: string;
    }[],
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void | undefined;
    defaultValue: string;
}

export const Select = ({ options, onChange, defaultValue }: OptionProps) => {
    return(
        <C.Container>
           <select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map( (item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ) )
                }
           </select>
        </C.Container>
    );
}