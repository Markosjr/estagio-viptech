import React from "react";
import { useForm } from 'react-hook-form'


function AddProduto () {

    const { register, handleSubmit, formState: {erros}} = useForm ()

    return (
        <div>
            <h1 className='addProdutotext'>Adicionar Produto </h1>


            
            <form >

                <div className="Nome">
                    <label> Nome do Produto</label>
                    <input type="text" name="Nome" {...register("nome")}/>
                </div>

                <div className="Marca">
                    <label> Marca </label>
                    <input type="text" />
                </div>

                <div className="Valor">
                    <label> Valor </label>
                    <input type="text" />
                </div>

                <div className="Cor">
                    <label> Cor </label>
                    <input type="text" />
                </div>


            </form>

            <button> ADICIONAR PRODUTO </button>
            
        </div>

       
           

        
    
        
    );
};

export default AddProduto;