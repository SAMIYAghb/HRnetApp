import { Button } from "antd";
import '../../../App.css'

interface ButtonUIProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ButtonUI: React.FC<ButtonUIProps> = ({text, onClick, disabled, className  }) =>{
  return(
    <Button 
    onClick={onClick}
    htmlType="submit"
    type="primary" block className={className}
    disabled={disabled}>
      {text}
    </Button>

  )
}
export default ButtonUI
