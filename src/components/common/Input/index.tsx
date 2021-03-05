import { useEffect } from "react";
import StyledInput from "./styles";
import api from "services";
import { ILocation } from "model/ILocation";

interface IInput {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onGeocode: (value?: ILocation) => void;
}

const Input: React.FC<IInput> = ({
  value,
  placeholder,
  onChange,
  onGeocode,
}) => {
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      !value && onGeocode();
      value.length > 3 && api.geocode(value, onGeocode);
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <StyledInput>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledInput>
  );
};

export default Input;
