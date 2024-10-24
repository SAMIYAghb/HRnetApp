import { Form, Input, InputNumber } from "antd";
import { Rule } from "antd/lib/form";

interface InputUIProps {
  name: string;
  rules?: Rule[];
  type?: "text" | "number";
}

const InputUI: React.FC<InputUIProps> = ({name, rules, type = "text", ...rest }) => {
  return  (
    <Form.Item name={name} rules={rules}>
      {type === "number" ? (
        <InputNumber
          min={1}
          style={{ width: "100%" }}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault(); // Empêche la saisie des lettres
            }
          }}
          {...rest}
        />
      ) : (
        <Input {...rest} />
      )}
    </Form.Item>
  );
};
export default InputUI;

// const InputUI = React.forwardRef<InputRef, InputProps>((propsAntDesign, ref) => (
//   <Input ref={ref} {...propsAntDesign} />
// ));

// forwardRef
// C'est une fonction de React qui permet de transférer une référence (ref) à un composant enfant. Cela permet à un composant parent d'accéder directement à l'élément DOM ou à l'instance du composant enfant.
// // Ici, forwardRef est utilisé pour permettre à un composant parent de passer une référence au composant Input d'Ant Design.

// InputUI est un composant personnalisé qui enveloppe le composant Input d'Ant Design. Il prend des propriétés (propsAntDesign) comme paramètres, qui représentent toutes les propriétés transmises à InputUI, et les transmet ensuite au composant Input en les décomposant avec {...propsAntDesign}.
// La référence (ref) reçue par InputUI est transférée au composant Input via ref={ref}, permettant ainsi au parent d'accéder directement à l'élément de champ de saisie.

// HTMLInputElement : Spécifie que la référence (ref) est liée à un élément DOM de type <input>.
// InputProps : Importé d'Ant Design, il définit les types des propriétés acceptées par le composant Input.
