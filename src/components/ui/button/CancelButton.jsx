import Button from './Button';

function CancelButton({ to, ...rest }) {
  return (
    <Button to={to} variants={["cancel"]} {...rest} >
      Cancelar
    </Button>
  );
}

export default CancelButton;
