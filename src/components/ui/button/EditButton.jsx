import Button from './Button';

function EditButton({ to, ...rest }) {
  return (
    <Button to={to} variants={["edit"]} {...rest} >
      Editar
    </Button>
  );
}

export default EditButton;
