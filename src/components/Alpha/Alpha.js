import { useState, memo, useEffect } from "react";
import { VisualComponent } from "../VisualComponent/VisualComponent";
import { Button } from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </>
  );
};

export const Alpha = () => {
  return (
    <VisualComponent title="Alpha" method="move state down / abstraction">
      <Counter />
      <Bravo />
    </VisualComponent>
  );
};

const Bravo = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState({});

  useEffect(() => {
    setTitle({ title: "Charlie" });
  }, []);

  // const title = { title: "Charlie" }; // shallow comparison
  // const title = "Charlie";

  return (
    <VisualComponent title="Bravo">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>

      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <CharlieMemo title={title} />
        <Fetch>
          <Fetch2 text="my text" />
        </Fetch>
      </div>
    </VisualComponent>
  );
};

const Charlie = ({ title }) => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title={title.title} method="memo">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <CharlieJr />
    </VisualComponent>
  );
};

const CharlieMemo = memo(
  Charlie
  // ({ title: prevTitle }, { title: nextTitle }) => {
  //   return prevTitle.title === nextTitle.title;
  // }
);

const CharlieJr = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="CharlieJr">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </VisualComponent>
  );
};

const Fetch = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Fetch">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Fetch Api</Button>
      {children}
    </VisualComponent>
  );
};

const Fetch2 = ({ text }) => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Fetch 2" method="child-as-props">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Fetch Api {text}</Button>
    </VisualComponent>
  );
};
