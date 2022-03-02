import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
    
    
            black: string;
            white: string;
            grey: string;
    
    
            success: string;
            info: string;
            warning: string;
    
        },
    }
}