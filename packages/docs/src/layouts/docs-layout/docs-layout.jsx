import React from 'react';
import MainLayout from '../main-layout/main-layout';
import { Markdown } from 'components/markdown';
import { SEO } from 'components/seo';
import { DOCS_MENU } from './modules/constants/docs-menu.constant';
import { DocsMenu } from './modules/components/docs-menu';
import './docs-layout.scss';

const DocsLayout = ({ data }) => {
  const { mdx } = data;
  const { body, frontmatter } = mdx;

  return (
    <MainLayout>
      <SEO title={frontmatter.title} />
      <div className="Docs">
        <div className="Docs-sidebar">
          <DocsMenu className="Docs-menu" menuItems={DOCS_MENU} />
        </div>
        <div className="Docs-content">
          <div className="Container">
            <article className="Docs-article">
              <header className="Docs-articleHeadline">
                <h1 className="Heading-1 MarginBottom-small FontSize-5xlarge">
                  {frontmatter.title}
                </h1>
                <p className="Heading-4 Color-neutral-70">{frontmatter.description}</p>
              </header>
              <div className="Docs-articleMarkdown">
                <Markdown>{mdx && body}</Markdown>
              </div>
            </article>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const query = graphql`
  query DocsByPath($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        path
        title
        description
      }
      body
    }
  }
`;

export default DocsLayout;
