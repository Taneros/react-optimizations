# Moving State Down
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </>
  );
};

# Memo 
1.
  const [title, setTitle] = useState({});

  useEffect(() => {
    setTitle({ title: "Chalie" });
  }, []);

2.

const CharlieMemo = memo(
  Charlie,
  ({ title: titlePrev }, { title: titleNext }) => {
    return titleNext.title === titlePrev.title;
  }
);


# Children as props
const Fetch = ({ children }) => {
{children}