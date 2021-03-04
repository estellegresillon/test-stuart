import dropOffBlank from "./dropOffBadgeBlank.svg";
import pickUpBlank from "./pickUpBadgeBlank.svg";

export interface IIcon {
  icon: string;
}

const Icon: React.FC<IIcon> = ({ icon }) => {
  let IconComponent;

  switch (icon) {
    case "dropOffBlank":
      IconComponent = dropOffBlank;
      break;
    case "pickUpBlank":
      IconComponent = pickUpBlank;
      break;
    default:
      break;
  }

  return IconComponent ? <img src={IconComponent} alt={icon} /> : null;
};

export default Icon;
