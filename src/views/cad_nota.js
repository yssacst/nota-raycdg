import React from 'react';
import { useForm } from "react-hook-form";
import '../css/nota.css';

const CadNota = () => {

      const [indexes, setIndexes] = React.useState([]);
      const [counter, setCounter] = React.useState(0);
      const { register, handleSubmit } = useForm();
      const [total, setTotal] = React.useState(0);
      
      const onSubmit = data => {
        let tt = 0;
        data.produto.map((item, i)=>{
          console.log(item.vluni*item.qtd)
          tt+= (item.vluni*item.qtd)
        })
        // console.log('total: R$ '+tt)
        setTotal(tt);
      };

      const addProduto = () => {
      setIndexes(prevIndexes => [...prevIndexes, counter]);
      setCounter(prevCounter => prevCounter + 1);
      };

      const removeProduto = index => () => {
      setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
      //setCounter(prevCounter => prevCounter - 1);
    };
    
    const limparLista = () => {
      setIndexes([]);
      setCounter(0)
      setTotal(0);
      };

    return(
        <div>
          <h3>Cadastrar nova nota</h3>
          <hr/>
            <form className="frm-dados">
              <label>
                Nome cliente:
                <input
                  type="text"
                  name="nome"
                />
              </label>
              <label>
                WhatsApp:
                <input
                  type="text"
                  name="wpp"
                />
              </label>
              <label>
                E-mail:
                <input
                  type="text"
                  name="email"
                />
              </label>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div>
                <button type="button" onClick={addProduto}>
                  Incluir
                </button>
                <button type="button" onClick={limparLista}>
                  Limpar 
                </button>
              </div>
                {indexes.map(index => {
                  const fieldName = `produto[${index}]`;
                  return (
                    <fieldset name={fieldName} key={fieldName} className="itens">
                      <label>#{index}</label>
                        <label>Produto:
                          <input
                            type="text"
                            name={`${fieldName}.produto`}
                            ref={register}
                            placeholder="Produto"
                            required
                          />
                        </label>
                        <label>Qtd:
                          <input
                            type="number"
                            name={`${fieldName}.qtd`}
                            ref={register}
                            placeholder="Quantidade"
                            required
                          />
                        </label>
                        <label>Vl Uni:
                          <input
                            type="number"
                            name={`${fieldName}.vluni`}
                            ref={register}
                            placeholder="Valor Unitário"
                            required
                          />
                        </label>
                      <button type="button" onClick={removeProduto(index)}>
                        Excluir
                      </button>
                    </fieldset>
                  );
                })}
                <div>
                <button type="button" >
                  Calcular
                </button>
                <input type="submit" value="Registrar" />
                </div>
              </form>
                <h4>Total: R${total}</h4>
              <div className="footer">
                <small>*qtd= quantidade / vl uni= Valor Unitário</small>
              </div>
        </div>
        );
      }
      export default CadNota;