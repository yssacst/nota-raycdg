import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../css/nota.css';

const CadNota = () => {

    const[produto,setProduto] = useState([{
        produto:'',
        quantidade:0,
        vl_unitario:0
    }]);

    const[newProduto,setNewProduto] = useState([{
        produto:'',
        quantidade:0,
        vl_unitario:0    
    }]);

    function handleNewProduto(event){
        console.log(event.target.value);
      }

    function handleProdutoChange() {
        setProduto(...produto,produto);
      }

      const [indexes, setIndexes] = React.useState([]);
const [counter, setCounter] = React.useState(0);
const { register, handleSubmit } = useForm();

const onSubmit = data => {
console.log(data);
};

const addFriend = () => {
setIndexes(prevIndexes => [...prevIndexes, counter]);
setCounter(prevCounter => prevCounter + 1);
};

const removeFriend = index => () => {
setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
setCounter(prevCounter => prevCounter - 1);
};

const clearFriends = () => {
setIndexes([]);
setCounter(0)
};
    return(
        <div>

    <form onSubmit={handleSubmit(onSubmit)}>
      {indexes.map(index => {
        const fieldName = `friends[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              Produto {index}:
              <input
                type="text"
                name={`${fieldName}.firstName`}
                ref={register}
              />
            </label>
            <label>
              First Name {index}:
              <input
                type="text"
                name={`${fieldName}.firstName`}
                ref={register}
              />
            </label>

            <label>
              Last Name {index}:
              <input
                type="text"
                name={`${fieldName}.lastName`}
                ref={register}
              />
            </label>
            <button type="button" onClick={removeFriend(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addFriend}>
        Add Friend
      </button>
      <button type="button" onClick={clearFriends}>
        Clear Friends
      </button>
      <input type="submit" />
    </form>
  
            <hr/>
            <div>Cadastrar nota</div>
            <div>
               <form>
                   <label>Nome</label>
                   <input/>
               </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Produto</label>
                    <input type='text' name="produto" onChange={handleNewProduto}/>
                    <label>Quantidade</label>
                    <input type='text' name="quantidade" onChange={handleNewProduto}/>
                    <label>Valor unitário</label>
                    <input type='text' name="vl_unitario" onChange={handleNewProduto}/>
                    <label>Total</label>
                    <span></span>
                    <button onClick={handleProdutoChange}>Cadastrar</button>
                </form>
            </div>
            <hr/>
        </div>
    );
}
export default CadNota;