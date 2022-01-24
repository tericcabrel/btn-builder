import React from "react";
// @ts-ignore
import { Item, Span } from "react-html-email";
import { EmailLink } from "./EmailLink";

const TextDivider = () => <>&nbsp;|&nbsp;</>;

const EmailFooter = () => {
    return (
        <>
            <Item style={{ height: 20 }} />
            <Item align="center">
              <Span
                color="rgb(117, 128, 140)"
                fontSize={14}
                style={{ lineHeight: 1.4}}
              >
                <EmailLink href="https://twitter.com/baselimeHQ">
                  Baselime on Twitter
                </EmailLink>
                <TextDivider />
                <EmailLink href="https://www.linkedin.com/company/baselime/">
                  Baselime on LinkedIn
                </EmailLink>
              </Span>
            </Item>
            <Item style={{ height: 5 }} />
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                    <EmailLink href="https://baselime.io/blog">Our blog</EmailLink>
                    <TextDivider />
                    <EmailLink href="https://baselime.io/careers">Careers</EmailLink>
                    <TextDivider />
                    <EmailLink href="https://baselime.io/privacy">Privacy policy</EmailLink>
                </Span>
            </Item>
            <Item style={{ height: 45 }} />
        </>
    );
};

export { EmailFooter };
