import ColorList from "./ColorList.jsx";
import Form from "./Form";
import Values from 'values.js'
import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors,setColors] = useState(new Values('#00FFFF').all(10));

  const addColor = (color) => {
    try{
      const newColors = new Values(color).all(10);
      setColors(newColors);
    }
    catch(error){
      toast.error(error.message);
    }
  }
  return (
    <main>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
      <ToastContainer position="top-center"></ToastContainer>
    </main>
  );
};
export default App;
