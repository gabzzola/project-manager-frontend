import Button from './Button';

function CancelButton({ to, ...rest }) {
  return (
    <Button to={to} variants={["red"]} {...rest} >
      Cancelar
    </Button>
  );
}

export default CancelButton;
