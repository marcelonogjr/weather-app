import ReactMarkdown from 'react-markdown';
import testMd from '../../articles/About/testMd';

import styles from './AboutGeneral.module.css';

const AboutGeneral = () => {
  const markdown = `Just a link: [Learn React!](https://reactjs.com).  
  Here is a list for you:
  * Banana
  * Nabana
  * Nanaba
  `;

  return (
    <>
    <div className={styles['test-1']}>
      <ReactMarkdown children={testMd} />
    </div>
      <ReactMarkdown children={markdown} />
    </>
  );
};

export default AboutGeneral;
