import React, { useEffect, useReducer, useRef } from "react";
import { Button } from "../Button/Button";
import { VisualComponent } from "../VisualComponent/VisualComponent";

//TODO
/**
 * true or false
 *
 * Counter will rerender on props change?
 **/

const Counter = ({ count, key }) => {
  return (
    <VisualComponent>
      <h4 key={key} className="-mt-2 mb-1  font-thin">
        {count.count}
      </h4>
    </VisualComponent>
  );
};

const MemoisedComponent = React.memo(Counter);

export const PropsCauseRender = () => {
  const [_, forceRender] = useReducer((x) => x + 1, 0);
  let countRef = useRef(0);

  const handleClick = () => {
    const prevCount = countRef.current;
    countRef.current = prevCount + 1;

    console.log(
      `PropsCauseRender/PropsCauseRender.js - line: 12 ->> count`,
      countRef.current
    );
    // forceRender();
  };

  console.log(
    `PropsCauseRender/PropsCauseRender.js - line: 22 ->> count`,
    countRef.current
  );

  return (
    <VisualComponent>
      <Counter count={{ count: countRef.current }} />
      {/* <MemoisedComponent count={{ count: countRef.current }} /> */}
      <Button onClick={handleClick}>Update</Button>
    </VisualComponent>
  );
};

/**
 * There are four reasons why a component would re-render itself:
 * state changes,
 * parent (or children) re-renders,
 * context changes,
 * and hooks changes.
 *
 **/
