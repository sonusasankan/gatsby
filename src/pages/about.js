import React from "react";
import get from "lodash/get";

class About extends React.Component {
  render() {
    const posts = get(this, "props.data.allContentfulAbout.edges");
    console.log(posts);
    return (
      <div>
        {posts.map(({ node }) => {
          return <h1>{node.title}</h1>;
        })}
      </div>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query aboutQuery {
    allContentfulAbout {
      edges {
        node {
          title
          aboutImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
