import { Input, Button, Icon } from "components/common";
import StyledJobCreator from "./styles";

const JobCreator: React.FC = () => {
  return (
    <StyledJobCreator>
      <div className="Job-Creator-Input">
        <Icon icon="pickUpBlank" />
        <Input value="" placeholder="Pick up address" />
      </div>
      <div className="Job-Creator-Input">
        <Icon icon="dropOffBlank" />
        <Input value="" placeholder="Drop off address" />
      </div>
      <Button label="Create job" />
    </StyledJobCreator>
  );
};

export default JobCreator;
