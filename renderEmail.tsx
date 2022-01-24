import React, { ComponentType } from "react";

import { renderEmail } from "react-html-email";
import { EmailBuilder } from "./src/templates/EmailBuilder";

type Props = {
    title: string;
    callToActionText: string;
    callToActionLink: string;
    texts: string[];
};

export const renderReactEmail = (Component: ComponentType<Props>, data: Props) => {
    return renderEmail(<Component {...data} />);
}

export const renderEmailBuilder = (props: Props) => {
    return renderReactEmail(EmailBuilder, props);
};