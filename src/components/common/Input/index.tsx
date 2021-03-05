import { useEffect } from "react";
import { useDispatch } from "react-redux";

import StyledInput from "./styles";
import { geocodeRequest, fetchedDataResponse } from "store/actions";

interface IInput {
  placeholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}

const Input: React.FC<IInput> = ({ value, placeholder, type, onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      !value && dispatch(fetchedDataResponse(null, type));
      value.length > 3 && dispatch(geocodeRequest(value, type));
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
