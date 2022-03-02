import React, { useEffect, useState } from "react";
import * as C from './styles';

type FiltersProps = {
    handleFilterFrequency: (type: string) => void;
    frequency: string;
}

export const Filters = ( { handleFilterFrequency,  frequency}: FiltersProps ) => {
    return (
        <C.Container>
            <C.ButtonAction type="button" frequency={frequency === 'recorrente' ? true : false} onClick={() => handleFilterFrequency('recorrente')} value="Recorrente" color="#F7931B" />

            <C.ButtonAction type="button" frequency={frequency === 'eventual' ? true : false} onClick={() => handleFilterFrequency('eventual')} value="Eventual" color="#E44C4E" />
        </C.Container>
    );
}