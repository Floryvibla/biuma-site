import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonProps } from './d';
import variants from './styles';

const Button = ({
  variant = 'outline',
  type = 'button',
  title = 'Enviar',
  size = 'md',
  children,
  icon,
  ...props
}: ButtonProps) => {
  const stylesOfTypeSize = {
    height: size === 'sm' ? '2rem' : size === 'lg' ? '3.25rem' : '2.625rem',
    width: size === 'sm' ? '7.5rem' : size === 'lg' ? '11.25rem' : '10rem',
    fontSize: size === 'sm' ? '0.75rem' : size === 'lg' ? '1.125rem' : '1rem',
    fontWeight: size === 'lg' ? 'medium' : 'regular'
  };

  return (
    <ChakraButton
      {...props}
      {...variants[variant]}
      {...stylesOfTypeSize}
      rightIcon={icon}
      type={type}
      size={size}
    >
      {children ?? title}
    </ChakraButton>
  );
};

export default Button;
