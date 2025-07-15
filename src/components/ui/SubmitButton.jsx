import Button from './Button';

function SubmitButton({ children, ...rest }) {
  return (
    <Button type="submit" variant="green" {...rest}>
      {children}
    </Button>
  );
}

export default SubmitButton;
