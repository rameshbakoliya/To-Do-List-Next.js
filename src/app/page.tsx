'use client'
import Button from '@mui/material-next/Button';
import AddIcon from '@mui/icons-material/Add'
import { useState, ChangeEvent } from 'react'
import Data from '../../components/mapprpop';

 const Page: React.FC = () => {
  const [add, setAdd] = useState<string>('');
  const [newAdd, setNewAdd] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAdd(e.target.value);
  };

  const handleButton = () => {
    setNewAdd((prev) => [...prev, add]);
    setAdd("");
  };
  return (
    <div className='main-div'>
      <div className='center-div'>
      <h1>To Do List</h1>
        <div className='inputbut'>
        <input className='inputdata'
          type="text"
          placeholder="Add Your Items"
          onChange={handleInput}
          value={add}
        />
        <span onClick={handleButton}>
          <Button className='newBtn'>
            <AddIcon />
          </Button>
        </span>
        </div>
        <ol>
        {newAdd.map((val: string, index: number) => {
          return(
          //@ts-ignore
          <Data text={val} key={index} />)
          })}
      </ol>
      </div>    
    </div>
  );
};

export default Page;
