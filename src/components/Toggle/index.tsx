import React, { useState } from 'react';
import * as C from './styles';
export const Toggle = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
    return (
        <C.Container>
            <C.ToggleLabel>Light</C.ToggleLabel>
                <C.ToggleButton uncheckedIcon={false} checkedIcon={false} onChange={handleChange} checked={checked}/>
            <C.ToggleLabel>Dark</C.ToggleLabel>
        </C.Container>
    );
}