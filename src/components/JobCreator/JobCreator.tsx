import { useState } from "react";

import { Input, Button, Icon } from "components/common";
import StyledJobCreator from "./styles";
import { ILocation } from "model/ILocation";

const JobCreator: React.FC = () => {
  const [pickup, setPickup] = useState<ILocation>();
  const [dropoff, setDropoff] = useState<ILocation>();
  const [pickupInput, setPickupInput] = useState("");
  const [dropoffInput, setDropoffInput] = useState("");

  const handlePickupIcon = (icon: string, item?: ILocation) => {
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
          onGeocode={setPickup}
          placeholder="Pick up address"
        />
      </div>
      <div className="Job-Creator-Input">
        <Icon icon={handlePickupIcon("dropoff", dropoff)} />
        <Input
          value={dropoffInput}
          onChange={setDropoffInput}
          onGeocode={setDropoff}
          placeholder="Drop off address"
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
