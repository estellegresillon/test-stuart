import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Input, Button, Icon } from "components/common";
import StyledJobCreator from "./styles";
import { ILocation } from "model/ILocation";
import { selectPickup, selectDropoff, selectLoading } from "store/selectors";
import { createJobRequest } from "store/actions";

const JobCreator: React.FC = () => {
  const pickup = useSelector(selectPickup);
  const dropoff = useSelector(selectDropoff);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [pickupInput, setPickupInput] = useState("");
  const [dropoffInput, setDropoffInput] = useState("");

  const handlePickupIcon = (icon: string, item: ILocation | null) => {
    if (!item) {
      return `${icon}Blank`;
    }
    if (item.latitude) {
      return `${icon}Present`;
    } else return `${icon}Error`;
  };

  const handleButtonClick = () => {
    dispatch(createJobRequest({ pickup: pickupInput, dropoff: dropoffInput }));
  };

  return (
    <StyledJobCreator>
      <div className="Job-Creator-Input">
        <Icon icon={handlePickupIcon("pickup", pickup)} />
        <Input
          value={pickupInput}
          onChange={setPickupInput}
          placeholder="Pick up address"
          type="pickup"
        />
      </div>
      <div className="Job-Creator-Input">
        <Icon icon={handlePickupIcon("dropoff", dropoff)} />
        <Input
          value={dropoffInput}
          onChange={setDropoffInput}
          placeholder="Drop off address"
          type="dropoff"
        />
      </div>
      <Button
        disabled={!pickup?.latitude || !dropoff?.latitude || isLoading}
        label="Create job"
        onClick={handleButtonClick}
      />
    </StyledJobCreator>
  );
};

export default JobCreator;
