import Button from './Button';

function SubmitButton({ children, ...rest }) {
  return (
    <Button type="submit" variants={["green"]} {...rest}>
      {children}
    </Button>
  );
}

export default SubmitButton;
