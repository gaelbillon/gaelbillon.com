import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const CardContainer = styled.div`
  display: grid;
  grid-gap: 36px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .helper:nth-child(2) {
    grid-column: span 2;
  }

  .helper:nth-child(6) {
    grid-column: span 2;
  }

  .helper:nth-child(7) {
    grid-column: span 2;
  }
`;

const Image = styled(Img)``;

const Title = styled.h3`
  margin-top: 1rem;
`;

const Meta = styled.small``;

class PhotoCard extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: "/photo" + postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <CardContainer>
        {postList.map(post => (
          <Link to={post.path} key={post.title} className="helper">
            <Image sizes={post.cover.childImageSharp.sizes} />
            <Title className="s">{post.title}</Title>
          </Link>
        ))}
      </CardContainer>
    );
  }
}

export default PhotoCard;
