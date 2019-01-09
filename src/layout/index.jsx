import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import "./index.css";

const Border = styled.section`
    background-color: var(--color-background-500);
    margin: 0.5em;
    overflow: wrap;
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Border>
        {children}
        </Border>
      </div>
    );
  }
}