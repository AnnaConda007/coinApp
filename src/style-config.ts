export const themeApp: CoinStyle = {
    colors: {
        border_main: " rgb(71,0,185);",
        border_hover: "rgb(81, 16, 185);",
        border_active: "rgb(85, 31, 171)",
        background_main: "#030016",
        background_second: "#10003F",
        text: "#ffffff",
        border_main_second: "rgb(44,0,143)",
        coin_color: "#dbc6f7"




    },
};


interface CoinStyle {
    colors: Colors,
}

interface Colors {
    border_main: string,
    border_hover: string,
    border_active: string,
    background_main: string,
    background_second: string,
    text: string;
    border_main_second: string,
    coin_color: string

}

