export const theme: CoinStyle = {
    colors: {
        primary: "rgb(225, 172, 227)",
        secondary: "rgb(225, 172, 227)",
        dark: "rgba(0, 0, 0, 0.3)"
    },
};


interface CoinStyle {
    colors: Colors,
}

interface Colors {
    primary: string,
    secondary: string,
    dark: string,
}

