import React, { useEffect, useReducer, useRef } from "react";
import { Button } from "../Button/Button";
import { VisualComponent } from "../VisualComponent/VisualComponent";

//TODO
/**
 * true or false
 *
 * Counter will rerender on props change?
 * 
 **/

const CounterPrimitive = ({ count }) => {
  return (
    <VisualComponent title={"CounterPrimitive"}>
      <h4 className="-mt-2 mb-1  font-thin">{count}</h4>
    </VisualComponent>
  );
};

const Counter = ({ count, key }) => {
  return (
    <VisualComponent title={"CounterObject"}>
      <h4 key={key} className="-mt-2 mb-1  font-thin">
        {count.count}
      </h4>
    </VisualComponent>
  );
};

const MemoisedComponent = React.memo(Counter);
const MemoisedComponentPrimitive = React.memo(CounterPrimitive);

export const PropsCauseRender = () => {
  const [_, forceRender] = useReducer((x) => x + 1, 0);
  
  const countRef = useRef( 0 );

  const countNonPrimitive = useRef({count: 0})

  const handleClick = () => {
    const prevCount = countRef.current;
    countRef.current = prevCount + 1;

    countNonPrimitive.current = { count: countNonPrimitive.current.count + 1 }

    console.log(
      `PropsCauseRender/PropsCauseRender.js - line: 47 ->> countNonPrimitive.current`,
      countNonPrimitive.current
    );

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

  console.log(`PropsCauseRender/PropsCauseRender.js - line: 59 ->> countNonPrimitive.current`, countNonPrimitive.current)

  return (
    <VisualComponent>
      {/* <CounterPrimitive count={countRef.current} /> */}
      <Counter count={countNonPrimitive.current} />
      {/* <MemoisedComponent count={{ count: countRef.current }} /> */}
      {/* <MemoisedComponentPrimitive count={countRef.current}/> */}
      <Button onClick={handleClick}>Update</Button>
    </VisualComponent>
  );
};

/**
 * There are four reasons why a component would re-render itself:
 * parent (or children) re-renders,
 * state changes,
 * context changes,
 * and hooks changes.
 *
 **/
