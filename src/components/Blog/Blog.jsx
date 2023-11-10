import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Blog.css";

const Blog = () => {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };
    return (
      <>
        <Container>
          <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button btn btn-primary"
                onClick={downloadPDF}
                disabled={!(loader === false)}
              >
                {loader ? <span>Downloading</span> : <span>Download</span>}
              </button>
            </div>
          </div>
          <div className="actual-receipt">
            <div>
              <h1>
                Differences between uncontrolled and controlled components
              </h1>
              <p>
                In React, the state of a component is used to manage the values
                of its form elements, such as input, select, and textarea. There
                are two ways to manage the state of form elements in React:
                controlled components and uncontrolled components. Controlled
                components are those where the value of the form element is
                controlled by React, using its state. The state is updated every
                time the value of the form element changes, and the value of the
                element is always the value from the state. This approach gives
                full control over the form elements to React, but requires more
                code to be written. Uncontrolled components are those where the
                value of the form element is controlled by the DOM, not by
                React. The value of the element is retrieved using refs, and
                there is no need to manage the state of the form element using
                React. This approach requires less code to be written, but gives
                less control over the form elements to React.
              </p>
            </div>
            <div>
              <h1>How to validate React props using PropTypes</h1>
              <p>
                PropTypes is a type-checking library for React that helps you
                ensure that the data passed to your components is of the correct
                type. You can use PropTypes to validate the types of your props.
                To use PropTypes, you need to import it from the prop-types
                library and define the propTypes property on your component. For
                example, if you have a component that receives a string prop
                called "name".using PropTypes.string to validate that the "name"
                prop is a string, and PropTypes.isRequired to ensure that the
                prop is required.
              </p>
            </div>
            <div>
              <h1>Difference between Node.js and Express.js</h1>
              <p>
                Node.js is a runtime environment that allows you to run
                JavaScript on the server-side. It's built on top of the V8
                JavaScript engine used in the Chrome browser and provides a set
                of APIs for interacting with the file system, network, and other
                low-level operations. Express.js is a framework built on top of
                Node.js that provides a higher-level API for building web
                applications. It provides a set of functions for handling HTTP
                requests and responses, routing, and middleware. In summary,
                Node.js is a runtime environment for JavaScript on the
                server-side, while Express.js is a framework built on top of
                Node.js for building web applications.
              </p>
            </div>
            <div>
              <h1>
                What is a custom hook, and why will you create a custom hook
              </h1>
              <p>
                Custom hooks are functions that allow you to reuse logic across
                multiple components in your React application. They follow a
                naming convention of starting with the word "use" and can be
                created to encapsulate any kind of logic that can be shared
                across components, such as state management, API calls, or
                animations. You would create a custom hook to avoid code
                duplication and to make your code more modular and reusable. By
                creating a custom hook, you can extract logic from a component
                and reuse it in other components without having to copy and
                paste the code. For example, let's say you have a component that
                needs to make an API call and store the response in its state.
                You could create a custom hook called useApi that encapsulates
                the API call and returns the data and loading state
              </p>
            </div>
          </div>
        </Container>
      </>
    );
};

export default Blog;