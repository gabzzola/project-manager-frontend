import Button from './Button';

function DeleteButton({ to, ...rest }) {
  return (
    <Button to={to} variants={["delete"]} {...rest} >
      Excluir
    </Button>
  );
}

export default DeleteButton;
