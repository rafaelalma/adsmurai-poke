import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  classN?: string;
  name?: string;
  value?: string;
}

export const Button = ({
  label,
  name,
  value,
  classN,
  ...props
}: ButtonProps) => {
  const classes = props.disabled ? "button button--disabled" : "button";
  const classNameValue = classN
    ? classes.split(" ").concat(classN).join(" ")
    : classes;

  return (
    <button name={name} value={value} className={classNameValue} {...props}>
      {label}
    </button>
  );
};
