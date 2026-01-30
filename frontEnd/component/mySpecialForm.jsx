import PropTypes from "prop-types";
import '../form.css'
export default function MySpecialForm({ name, value, onChange, type = "text", condition }) {
  const handelChange = (e) => {
    let val = e.target.value;

    if (condition) {
      const isValid = condition(val);
      if (!isValid) return; 
    }

    onChange(name, val);
  };

  return (
    <div className="main">
      <label className="label">{name}</label>
      <input type={type} value={value} onChange={handelChange} />
      <hr />
    </div>
  );
}
MySpecialForm.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  condition: PropTypes.func
};

MySpecialForm.defaultProps = {
  type: "text",
  condition: null
};
