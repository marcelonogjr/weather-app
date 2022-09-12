import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface ReactMdCustomPropsType {
  text: string;
}

export const ReactMdCustomPure = (props: ReactMdCustomPropsType) => {
  return (
    <>
      <ReactMarkdown
        children={props.text}
        components={{
          a: ({ node, ...props }) => (
            // eslint-disable-next-line
            <a target='_blank' rel='noopener noreferrer' {...props} />
          ),
        }}
      />
    </>
  );
};

export const ReactMdCustomWithKatex = (props: ReactMdCustomPropsType) => {
  return (
    <>
      <ReactMarkdown
        children={props.text}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          a: ({ node, ...props }) => (
            // eslint-disable-next-line
            <a target='_blank' rel='noopener noreferrer' {...props} />
          ),
        }}
      />
    </>
  );
};
