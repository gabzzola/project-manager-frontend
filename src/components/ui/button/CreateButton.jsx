import Button from './Button';

function CreateButton({ to, hasData, children }) {

  const buttonVariants = [
    'cta',
    ...(!hasData ? ['pulsing'] : [])
  ];

  return (
    <Button to={to} variants={buttonVariants}>
      {children}
    </Button>
  );
}

export default CreateButton;
