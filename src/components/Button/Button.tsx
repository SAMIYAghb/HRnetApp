import { Button, Flex } from "antd";

// const ButtonUI = ({ ...propsAntDesign }) => {
//   return (
//     <Button {...propsAntDesign} />
//   )
// }
const ButtonUI = () =>{
  return(
    <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" block>
      Primary
    </Button>
    </Flex>
  )
}
export default ButtonUI
