import { useDispatch, useSelector } from "react-redux";

import Map from "components/Map";
import JobCreator from "components/JobCreator";
import { Toast } from "components/common";
import {
  selectPickup,
  selectDropoff,
  selectLoading,
  selectJobCreated,
} from "store/selectors";
import { createJobSuccess } from "store/actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pickup = useSelector(selectPickup);
  const dropoff = useSelector(selectDropoff);
  const isLoading = useSelector(selectLoading);
  const isJobCreated = useSelector(selectJobCreated);

  const handleClick = () => {
    dispatch(createJobSuccess(false));
  };

  return (
    <div id="App-Container">
      {(isLoading || isJobCreated) && (
        <Toast
          onClick={handleClick}
          label={
            isLoading ? "Creating..." : "Job has been created successfully !"
          }
        />
      )}
      <JobCreator />
      <Map pickup={pickup} dropoff={dropoff} />
    </div>
  );
};

export default App;
