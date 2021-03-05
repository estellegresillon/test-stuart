import { useState } from "react";
import { useSelector } from "react-redux";

import { Input, Button, Icon } from "components/common";
import StyledJobCreator from "./styles";
import { ILocation } from "model/ILocation";
import { selectPickup, selectDropoff } from "store/selectors";

const JobCreator: React.FC = () => {
  const pickup = useSelector(selectPickup);
  const dropoff = useSelector(selectDropoff);
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
        disabled={!pickup?.latitude || !dropoff?.latitude}
        label="Create job"
      />
    </StyledJobCreator>
  );
};

export default JobCreator;
