import dropoffBlank from "./dropOffBadgeBlank.svg";
import pickupBlank from "./pickUpBadgeBlank.svg";
import dropoffError from "./dropOffBadgeError.svg";
import pickupError from "./pickUpBadgeError.svg";
import dropoffPresent from "./dropOffBadgePresent.svg";
import pickupPresent from "./pickUpBadgePresent.svg";
import dropoffMarker from "./dropOffMarker.svg";
import pickupMarker from "./pickUpMarker.svg";

interface IIcon {
  icon: string;
}

const Icon: React.FC<IIcon> = ({ icon }) => {
  let IconComponent;

  switch (icon) {
    case "dropoffBlank":
      IconComponent = dropoffBlank;
      break;
    case "pickupBlank":
      IconComponent = pickupBlank;
      break;
    case "dropoffError":
      IconComponent = dropoffError;
      break;
    case "pickupError":
      IconComponent = pickupError;
      break;
    case "dropoffPresent":
      IconComponent = dropoffPresent;
      break;
    case "pickupPresent":
      IconComponent = pickupPresent;
      break;
    case "dropoffMarker":
      IconComponent = dropoffMarker;
      break;
    case "pickupMarker":
      IconComponent = pickupMarker;
      break;
    default:
      break;
  }

  return IconComponent ? <img src={IconComponent} alt={icon} /> : null;
};

export default Icon;
