import { useSelector } from "react-redux";

import Map from "components/Map";
import JobCreator from "components/JobCreator";
import { selectPickup, selectDropoff } from "store/selectors";

const App: React.FC = () => {
  const pickup = useSelector(selectPickup);
  const dropoff = useSelector(selectDropoff);

  return (
    <div id="App-Container">
      <JobCreator />
      <Map pickup={pickup} dropoff={dropoff} />
    </div>
  );
};

export default App;
