import {useState, FormEvent} from 'react';
import { db } from '../../../firebaseConnection/firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'
import toast from 'react-hot-toast';




export function ProductsDashboard(){



    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

   

    const sendProduct = async (e: FormEvent) => {
        e.preventDefault();

        if(name === '' || price === '' || description === ''){
            toast.error('Preencha todos os campos!');
            return;
        }

        const product = {
            name,
            price,
            description
        };

        try{
        await addDoc(collection(db, "products"), product);
            
            setName('');
            setPrice('');
            setDescription('');           
    
            toast.success('Produto cadastrado com sucesso!');           
            
      
          }catch(error) {
              console.log(error);
              console.log("Erro ao cadastrar!");
              toast.error('Erro ao cadastrar!');
              
              
              
          }
       
        
    }


    return(
        <div className="bg-slate-700 relative px-4 py-5 h-auto w-full mt-10 grid items-center justify-center">
           <div className="relative px-4 py-5 h-auto w-full mt-10 flex items-center justify-center">
           
            <form
                className="px-4 flex flex-col relative bg-slate-700 gap-3 w-96 "
                onSubmit={sendProduct}
            >
                <p className="text-amber-400 font-bold text-3xl text-center">Cadastro de produtos</p>
                <p className="text-amber-400 font-bold text-xl mt-4">Digite o nome do produto</p>
                <input 
                    type="text"
                    className="rounded-lg h-11 p-3"
                    placeholder="Pneu aro 22'"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />

                <p className="text-amber-400 font-bold text-xl">Digite o valor</p>
                <input 
                    type="text"
                    className="rounded-lg h-11 p-3" 
                    placeholder="R$: 150,00"
                    value={price}
                    onChange={ (e) => setPrice(e.target.value) } 
                />

                <p className="text-amber-400 font-bold text-xl">Digite a descrição</p>
                <textarea
                    className="rounded-lg h-36 p-3"
                    placeholder="Digite aqui  a descrição do produto" 
                    value={description}
                    onChange={ (e) => setDescription(e.target.value) }
                >               
            

                </textarea>

                <button
                            type='submit'
                            className='bg-amber-400 p-4 text-slate-800 font-bold rounded-3xl shadow-2xl hover:scale-105 hover:transition-all hover:bg-amber-500'
                >
                        Cadastrar produto
                </button>


            </form>

            
        </div>
        <div className='bg-white flex'>
            <h1>Lista de produtos cadastrados</h1>
        </div>
    </div>
    );
}