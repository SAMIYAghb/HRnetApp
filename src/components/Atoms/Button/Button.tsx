import { Button } from "antd";
import '../../../App.css'

interface ButtonUIProps {
  text: string;
  onClick?: () => void;
}

const ButtonUI: React.FC<ButtonUIProps> = ({text, onClick }) =>{
  return(
    <Button 
    onClick={onClick}
    htmlType="submit"
    type="primary" block className="submit_btn">
      {text}
    </Button>

  )
}
export default ButtonUI
