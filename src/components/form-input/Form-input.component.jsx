// import "./form-input.styles.scss";

import "./form-input.styles";
import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      {/* <div className="group">
      <input className="form-input" {...otherProps} />
        {label && (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        )}
        
      </div> */}

      <Group>
        <Input {...otherProps} />
        {label && (
          <FormInputLabel shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
        )}
      </Group>
    </>
  );
};

export default FormInput;
