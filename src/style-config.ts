export const themeApp: CoinStyle = {
    colors: {
        border_color_main: " rgb(71,0,185);",
        border_color_second: "rgb(81, 16, 185);",
        border_color_third: "rgb(85, 31, 171)",
        background_color_main: "#030016",
        background_color_second: "rgb(82, 8, 109)",
        light_color: "#dbc6f7",
    },
    fonts: {
        main_font: "RubikVinyl"
    }
};


interface CoinStyle {
    colors: Colors,
    fonts: Fonts
}

interface Colors {
    border_color_main: string,
    border_color_second: string,
    border_color_third: string,
    background_color_main: string,
    background_color_second: string,
    light_color: string;

}


interface Fonts {
    main_font: string,

}


