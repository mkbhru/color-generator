import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if(navigator.clipboard){
        try{
            await navigator.clipboard.writeText(`#${hex}`);
            toast.success('Copied to clipboard'); 
        }
        catch(error){
            toast.error(error.message);
        }
    }
    else{
        toast.error('Your browser does not support clipboard');
    }
  }
  return (
    <article className={index>10 ? 'color color-light': 'color'} style={{ background: `#${hex}` }} onClick={saveToClipboard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
