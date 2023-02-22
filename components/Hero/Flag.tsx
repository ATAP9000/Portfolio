import React, { FC } from "react";
import ReactCountryFlag from "react-country-flag";

export const Flag: FC = (): JSX.Element => {
    return (
        <ReactCountryFlag countryCode="VE" style={{fontSize: 40}} svg />
    )
}