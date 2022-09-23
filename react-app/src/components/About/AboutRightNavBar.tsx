import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import styles from './AboutRightNavBar.module.css';

interface AboutRightNavBarPropsType {
  articleSpecifics: {
    headingSections: {
      id: string;
      title: string;
      type: string;
    }[];
    refs: null[] | HTMLHeadingElement[];
  };
}

const AboutRightNavBar = (props: AboutRightNavBarPropsType) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const pathHash = useLocation().hash.replace('#', '');

  const articleHeading = props.articleSpecifics.headingSections;
  const articleRefs = props.articleSpecifics.refs;

  const notNullTypeNarrowing = (
    refs: null[] | HTMLHeadingElement[]
  ): refs is HTMLHeadingElement[] => {
    return (refs[0] as HTMLHeadingElement).offsetTop !== undefined;
  };

  // handle user click to a specific section minus 88px -> the header is currently 84px
  useEffect(() => {
    if (notNullTypeNarrowing(articleRefs)) {
      for (let i = 0; i < articleHeading.length; i++) {
        if (pathHash === articleHeading[i].id) {
          window.scrollTo({top: articleRefs[i].offsetTop - 88});
          return;
        }
      }
    }
  }, [articleRefs, articleHeading, pathHash]);

  // handle the scroll position to change the 'active' class
  useEffect(() => {
    const handleScroll = () => {
      if (notNullTypeNarrowing(articleRefs)) {
        for (let i = 0; i < articleRefs.length - 1; i++) {
          if (
            articleRefs[i].offsetTop <= window.scrollY + 90 &&
            articleRefs[i + 1].offsetTop >= window.scrollY + 90
          ) {
            setSelectedIndex(i);
            return;
          }
        }
        if (articleRefs[articleRefs.length - 1].offsetTop <= window.scrollY) {
          setSelectedIndex(articleRefs.length - 1);
          return;
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [articleRefs]);

  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (notNullTypeNarrowing(articleRefs)) {
      for (let i = 0; i < articleHeading.length; i++) {
        if (event.currentTarget.hash.replace('#', '') === articleHeading[i].id) {
          window.scrollTo({top: articleRefs[i].offsetTop - 88});
          return;
        }
      }
    }
  };

  const sectionsElements = props.articleSpecifics.headingSections.map(
    (element, index) => {
      return (
        <a
          key={index + element.id}
          href={`#${element.id}`}
          className={`${styles[`${element.type}-section`]} ${
            index === selectedIndex ? styles['active'] : ''
          }`}
          onClick={clickHandler}
        >
          {element.title}
        </a>
      );
    }
  );

  return (
    <aside className={styles['about-right_nav_bar']}>
      <nav>{sectionsElements}</nav>
    </aside>
  );
};

export default AboutRightNavBar;
