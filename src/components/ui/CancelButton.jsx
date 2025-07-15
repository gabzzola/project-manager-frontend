import Button from './Button';

function CancelButton({ to }) {
  return (
    <Button to={to} variant="red">
      Cancelar
    </Button>
  );
}

export default CancelButton;
