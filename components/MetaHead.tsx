import Head from "next/head";
import React, { FC } from "react";

interface IMetadata {
    name: string;
    content: string;
}

interface IProps {
    title: string;
    meta: IMetadata[];
}

export const MetaHead: FC<IProps> = (props): JSX.Element => {
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="author" content="Angelo Tarazona" />
                {
                    props.meta.map((meta): JSX.Element => {
                        return (
                            <meta key={meta.name} name={meta.name} content={meta.content} />
                        )
                    })
                }
            </Head>
        </React.Fragment>
    )
}