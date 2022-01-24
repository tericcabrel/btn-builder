import React from "react";
import ReactEmail, { A, Box, Email, Item, Image, Span } from "react-html-email";
import { EmailFooter } from "./EmailFooter";

ReactEmail.configStyleValidator({
    platforms: [
        'gmail',
        'gmail-android',
        'apple-mail',
        'apple-ios',
        'yahoo-mail',
        'outlook',
        'outlook-legacy',
        'outlook-web',
    ],
});

type Props = {
    title: string;
    callToActionText: string;
    callToActionLink: string;
    texts: string[];
};

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
  @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
  @font-face {
    font-family: Inter;
    src: url('https://fonts.googleapis.com/css?family=Inter&display=swap');
  } 
`.trim();

const emailTextDefaults = {
    fontFamily: "Inter, Arial, Lato, sans-serif",
   // fontSize: 16,
};

const backgroundStyle = {
    WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    backgroundColor: "#FFF",
    borderRadius: 7,
    boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    margin: "0 auto",
    width: "100%",
    padding: "0 32px",
};

const containerStyle = {
    backgroundColor: "#F5F8FA",
    width: "100%"
};

const linkStyle = {
    ...emailTextDefaults,
    color: "white",
    display: "block",
    paddingBottom: "13px",
    paddingTop: "13px",
    textDecoration: "none",
    width: "100%",
    fontWeight: "bold"
};

const fluidItemStyle = {
    backgroundColor: "#009242",
    borderRadius: 4,
    cursor: "pointer",
    height: 48,
    textAlign: "center",
    textDecoration: "none",
};

const EmailBuilder = ({
  callToActionLink,
  callToActionText,
  texts,
  title,
}: Props) => (
    <Box align="center" style={containerStyle}>
        <Email align="center" headCSS={emailHeadCSS} title={title}>
            <Item style={{ height: 45 }} />
            <Item>
                <Image height="auto" src="https://baselime.io/_nuxt/img/logo-wide.3869ab4.svg" style={{ margin: "0 auto "}} width={200} />
            </Item>
            <Item style={{ height: 30 }} />
            <Item align="center">
                <Box style={backgroundStyle}>
                    <Item style={{ height: 40 }} />
                    <Item>
                        <Span style={{ ...emailTextDefaults }} fontSize={22} fontWeight="bold">{title}&nbsp;</Span>
                    </Item>
                    <Item style={{ height: 10 }} />

                    {texts.map((text, index) => (
                      <Item key={`text-${index}`}>
                          <Item style={{ height: 25 }} />
                          <Item style={{ ...emailTextDefaults }}>{text}</Item>
                      </Item>
                    ))}

                    <Item style={{ height: 50 }} />
                    <Item className="button" style={fluidItemStyle}>
                        <A href={callToActionLink} style={linkStyle}>{callToActionText}</A>
                    </Item>
                    <Item style={{ height: 35 }} />
                    <EmailFooter />
                </Box>
            </Item>
        </Email>
    </Box>
);

export { EmailBuilder };
