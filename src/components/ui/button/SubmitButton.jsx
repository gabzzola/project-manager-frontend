import Button from './Button';

function SubmitButton({ children, ...rest }) {
  return (
    <Button type="submit" variants={["submit"]} {...rest}>
      {children}
    </Button>
  );
}

export default SubmitButton;
