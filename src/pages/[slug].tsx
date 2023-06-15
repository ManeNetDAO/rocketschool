import type { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { allPages } from '@/content/allPages';
import { Videos } from '@/components/templates/Videos/Videos';
import { About } from '@/components/templates/About/About';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPages.map((page, index) => ({
    params: { slug: page.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: ParsedUrlQuery }) => {
  const { slug } = context.params;
  // Get the props data dynamically based on the page name
  const pageData = allPages.find((page) => page.name === slug);
  if (!pageData) throw `Page name not found, ${context.params.index}`;

  // Import and execute the props file to get the props object
  const props = await import(`../content/${pageData.content}`);

  const newProps = JSON.parse(JSON.stringify(props));
  newProps.type = pageData.type;
  return { props: newProps };
};

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  if (props.type === 'about') {
    return <About {...props} />;
  } else {
    return <Videos {...props} />;
  }
}
