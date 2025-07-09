import { useNavigate } from 'react-router-dom';
import Button from './Button';

function CancelButton({ to }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(to);
  };

  return (
    <Button
      type="button"
      variant="red"
      onClick={handleCancel}
    >
      Cancelar
    </Button>
  );
}

export default CancelButton;
