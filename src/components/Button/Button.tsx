import { Button } from "antd";
import '../../App.css'
// const ButtonUI = ({ ...propsAntDesign }) => {
//   return (
//     <Button {...propsAntDesign} />
//   )
// }
const ButtonUI = () =>{
  return(
    <Button type="primary" block className="submit_btn">
      Save
    </Button>

  )
}
export default ButtonUI
