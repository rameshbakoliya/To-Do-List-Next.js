import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const Data = (props: { text: string }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteEvent = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }
  return (
    <>    
      <span onClick={deleteEvent} style={{display:"flex"}}>
        <DeleteIcon />  
        <li style={{ listStyle: "none"}}>{props.text}</li>
      </span>
    </>   
  );
};

export default Data;
