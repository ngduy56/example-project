import { useEffect, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addJob, selectJob, selectJobs, setJob } from "./slices/TodoSlice";
// import { fetchPostThunk } from "./slices/PostSlice";
import { action } from "./store/store";
import { fetchPostThunk } from "./slices/PostSlice";

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const job = useSelector(selectJob);
  const jobs = useSelector(selectJobs);

  const hanldeChange = (e) => {
    dispatch(setJob(e.target.value));
  };
  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  useEffect(() => {
    hello = "hello";
    var hello;
    console.log(hello);
    dispatch(fetchPostThunk()).then((data) => {
      console.log(data.payload);
    });
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <div>
          <h2>Hehe</h2>
          <input ref={inputRef} value={job} onChange={hanldeChange} />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div>
          {jobs &&
            jobs.map((job) => (
              <div key={job}>
                <li>{job}</li>
              </div>
            ))}
        </div>
      </div>
      <hr />
      <div>Counter</div>
      <div>
        <div style={{ padding: "2rem" }}>
          <button onClick={() => action("INCREMENT_ASYNC")}>
            Increment after 1 second
          </button>
          <button onClick={() => action("INCREMENT")}>Increment</button>
          <button onClick={() => action("DECREMENT")}>Decrement</button>
          <hr />
          <div>Clicked: 1 times</div>
        </div>
      </div>
    </div>
  );
}

export default App;
