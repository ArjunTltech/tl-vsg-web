
import React, { useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const NewsDetailsLeft = ({ blogDatas = {} }) => {
  const { image, content, title, date, excerpt, author } = blogDatas;
  const contentRef = useRef(null);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";


  const fixNestedListCounters = () => {
    if (!contentRef.current) return;

    const orderedLists = contentRef.current.querySelectorAll('ol');
    
    orderedLists.forEach(ol => {
      const items = Array.from(ol.children);
      let level0Counter = 0;
      let level1Counter = 0;
      let level2Counter = 0;
      let level3Counter = 0;
      let level4Counter = 0;

      items.forEach(item => {
        const classList = Array.from(item.classList);
        const indentClass = classList.find(cls => cls.startsWith('ql-indent-'));
        
        if (!indentClass) {
          // Level 0 (main level)
          level0Counter++;
          level1Counter = 0;
          level2Counter = 0;
          level3Counter = 0;
          level4Counter = 0;
          item.setAttribute('data-counter', level0Counter);
          item.setAttribute('data-level', '0');
        } else {
          const level = parseInt(indentClass.split('-')[2]);
          
          if (level === 1) {
            level1Counter++;
            level2Counter = 0; 
            level3Counter = 0;
            level4Counter = 0;
            item.setAttribute('data-counter', level1Counter);
            item.setAttribute('data-level', '1');
          } else if (level === 2) {
            level2Counter++;
            level3Counter = 0; 
            level4Counter = 0;
            item.setAttribute('data-counter', level2Counter);
            item.setAttribute('data-level', '2');
          } else if (level === 3) {
            level3Counter++;
            level4Counter = 0; 
            item.setAttribute('data-counter', level3Counter);
            item.setAttribute('data-level', '3');
          } else if (level === 4) {
            level4Counter++;
            item.setAttribute('data-counter', level4Counter);
            item.setAttribute('data-level', '4');
          }
        }
      });
    });
  };

  useEffect(() => {
    if (content) {

      setTimeout(() => {
        fixNestedListCounters();
      }, 100);
    }
  }, [content]);

  return (
    <div className="news-details__left">
      <style>{`
        /* FIXED: JavaScript-powered counter system using data attributes */
        .news-details__text-1 {
          font-size: 16px;
          line-height: 1.6;
        }

        /* Reset and base styles for lists */
        .news-details__text-1 ol,
        .news-details__text-1 ul {
          padding-left: 1.5em;
          margin: 1em 0;
        }
        
        .news-details__text-1 li {
          margin-bottom: 0.5em;
          line-height: 1.6;
          list-style: none;
          position: relative;
        }

        /* Indentation for nested levels */
        .news-details__text-1 .ql-indent-1 { padding-left: 0em; }
        .news-details__text-1 .ql-indent-2 { padding-left: 0em; }
        .news-details__text-1 .ql-indent-3 { padding-left: 0.5em; }
        .news-details__text-1 .ql-indent-4 { padding-left: 1.5em; }
        .news-details__text-1 .ql-indent-5 { padding-left: 9em; }
        .news-details__text-1 .ql-indent-6 { padding-left: 10.5em; }
        .news-details__text-1 .ql-indent-7 { padding-left: 12em; }
        .news-details__text-1 .ql-indent-8 { padding-left: 13.5em; }

        /* JavaScript-controlled counter display */
        .news-details__text-1 ol li[data-level="0"]:before {
          content: attr(data-counter) ". ";
          position: absolute;
          left: -2em;
          font-weight: normal;
          color: inherit;
        }

        .news-details__text-1 ol li[data-level="1"]:before {
          content: counter(level1, lower-alpha) ". ";
          position: absolute;
          left: -2em;
          font-weight: normal;
          color: inherit;
        }

        .news-details__text-1 ol li[data-level="2"]:before {
          content: counter(level2, lower-roman) ". ";
          position: absolute;
          left: -2em;
          font-weight: normal;
          color: inherit;
        }

        .news-details__text-1 ol li[data-level="3"]:before {
          content: counter(level3, upper-alpha) ". ";
          position: absolute;
          left: -2em;
          font-weight: normal;
          color: inherit;
        }

        .news-details__text-1 ol li[data-level="4"]:before {
          content: counter(level4, upper-roman) ". ";
          position: absolute;
          left: -2em;
          font-weight: normal;
          color: inherit;
        }

        /* Custom counter display using JavaScript data */
        .news-details__text-1 ol li[data-level="1"][data-counter="1"]:before { content: "a. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="2"]:before { content: "b. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="3"]:before { content: "c. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="4"]:before { content: "d. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="5"]:before { content: "e. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="6"]:before { content: "f. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="7"]:before { content: "g. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="8"]:before { content: "h. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="9"]:before { content: "i. "; }
        .news-details__text-1 ol li[data-level="1"][data-counter="10"]:before { content: "j. "; }

        .news-details__text-1 ol li[data-level="2"][data-counter="1"]:before { content: "i. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="2"]:before { content: "ii. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="3"]:before { content: "iii. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="4"]:before { content: "iv. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="5"]:before { content: "v. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="6"]:before { content: "vi. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="7"]:before { content: "vii. "; }
        .news-details__text-1 ol li[data-level="2"][data-counter="8"]:before { content: "viii. "; }

        .news-details__text-1 ol li[data-level="3"][data-counter="1"]:before { content: "A. "; }
        .news-details__text-1 ol li[data-level="3"][data-counter="2"]:before { content: "B. "; }
        .news-details__text-1 ol li[data-level="3"][data-counter="3"]:before { content: "C. "; }
        .news-details__text-1 ol li[data-level="3"][data-counter="4"]:before { content: "D. "; }
        .news-details__text-1 ol li[data-level="3"][data-counter="5"]:before { content: "E. "; }

        .news-details__text-1 ol li[data-level="4"][data-counter="1"]:before { content: "I. "; }
        .news-details__text-1 ol li[data-level="4"][data-counter="2"]:before { content: "II. "; }
        .news-details__text-1 ol li[data-level="4"][data-counter="3"]:before { content: "III. "; }
        .news-details__text-1 ol li[data-level="4"][data-counter="4"]:before { content: "IV. "; }

        /* Bullet lists styling */
        .news-details__text-1 ul > li:before {
          content: '•';
          position: absolute;
          left: -1em;
          font-weight: bold;
          color: inherit;
        }
        
        .news-details__text-1 ul li.ql-indent-1:before {
          content: '◦';
        }
        
        .news-details__text-1 ul li.ql-indent-2:before {
          content: '▪';
        }
        
        .news-details__text-1 ul li.ql-indent-3:before {
          content: '▫';
        }

        /* Ensure images are responsive within the content */
        .news-details__text-1 img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1em 0;
        }

        /* Basic styling for other common Quill elements */
        .news-details__text-1 blockquote {
          border-left: 4px solid #ccc;
          margin: 1em 0;
          padding-left: 16px;
          font-style: italic;
          color: #555;
        }
        
        .news-details__text-1 pre {
          background-color: #f1f1f1;
          padding: 0.75rem;
          border-radius: 4px;
          overflow-x: auto;
          margin: 1em 0;
        }
        
        .news-details__text-1 code {
          background-color: #f1f1f1;
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        }
        
        .news-details__text-1 a {
          color: #007bff;
          text-decoration: underline;
        }

        .news-details__text-1 a:hover {
          color: #0056b3;
        }

        /* Additional text formatting */
        .news-details__text-1 strong {
          font-weight: bold;
        }
        
        .news-details__text-1 em {
          font-style: italic;
        }
        
        .news-details__text-1 u {
          text-decoration: underline;
        }
        
        .news-details__text-1 s {
          text-decoration: line-through;
        }

        /* Headers within content */
        .news-details__text-1 h1,
        .news-details__text-1 h2,
        .news-details__text-1 h3 {
          margin: 1.5em 0 0.5em 0;
          font-weight: bold;
          line-height: 1.3;
        }
        
        .news-details__text-1 h1 {
          font-size: 2em;
        }
        
        .news-details__text-1 h2 {
          font-size: 1.5em;
        }
        
        .news-details__text-1 h3 {
          font-size: 1.2em;
        }

        /* Paragraph spacing */
        .news-details__text-1 p {
          margin: 1em 0;
        }
      `}</style>

      <div className="news-details__img">
        {image && <Image src={image} alt={title || "Blog Image"} fluid />}
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-details__meta">
          <li>
            <Link href="#">
              <i className="far fa-user-circle"></i> {author || "Admin"}
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="far fa-calendar"></i> {formattedDate}
            </Link>
          </li>
        </ul>
        <h3 className="news-details__title">{title}</h3>
        {excerpt && <p className="news-details__excerpt">{excerpt}</p>}
        <div
          ref={contentRef}
          className="news-details__text-1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default NewsDetailsLeft;