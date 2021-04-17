import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTimes } from "./actions/times";

import Form from "./components/form";
import TimesTable from "./components/timesTable";

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTimes())
    }, [dispatch])
  return (
    <div className="App">
      <h1>GUXC Mario Kart Leaderboard</h1>
      <Form />
      <TimesTable />
    </div>
  );
}

export default App;
