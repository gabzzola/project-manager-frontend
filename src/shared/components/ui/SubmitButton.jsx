import Button from './Button';

function SubmitButton({ text }) {
  return (
    <Button
      type="submit"
      variant="green"
    >
      {text}
    </Button>
  );
}

export default SubmitButton;
