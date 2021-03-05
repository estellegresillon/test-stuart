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

  const dispatchRequest = () => {
    value.length > 0 && dispatch(geocodeRequest(value, type));
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      !value && dispatch(fetchedDataResponse(null, type));
      dispatchRequest();
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <StyledInput>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={dispatchRequest}
      />
    </StyledInput>
  );
};

export default Input;
