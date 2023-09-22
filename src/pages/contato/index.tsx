import {useState, FormEvent} from 'react';
import { storage, db} from '../../firebaseConnection/firebaseConnection'
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore'
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser'





export function Contact(){


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

   

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            toast.error('Preencha todos os campos!');
            return;
        }

        const contato = {
            name,
            email,
            message
        };

        try{
        await addDoc(collection(db, "contatos"), contato);
            
            setName('');
            setEmail('');
            setMessage('');
            
            const templateParams = {
                from_name: name,
                message: message,
                email: email
            }

            emailjs.send('service_e2l0ywd', 'template_0o5kfxn', templateParams, '8ERhZ8DJNyQYEVRrM')
            .then((response) => {
                console.log(response.status, response.text);
                
            }, (error) =>{
                console.log(error);
                
            })

            toast.success('Mensagem enviada com sucesso!');
           
            
      
          }catch(error) {
              console.log(error);
              console.log("Erro ao cadastrar!");
              toast.error('Erro ao enviar a mensagem!');
              
              
              
          }
       
        
    }

    



    return(
        <div className="bg-slate-700 relative px-4 py-5 h-auto w-full mt-10 flex items-center justify-center">
            
            <form
                className="px-4 flex flex-col relative bg-slate-700 gap-3 w-96 "
                onSubmit={sendMessage}
            >
                <p className="text-amber-400 font-bold text-3xl text-center">Deixe sua mensagem ou sugestão!</p>
                <p className="text-amber-400 font-bold text-xl mt-4">Digite seu nome</p>
                <input 
                    type="text"
                    className="rounded-lg h-11 p-3"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />

                <p className="text-amber-400 font-bold text-xl">Digite seu email</p>
                <input 
                    type="text"
                    className="rounded-lg h-11 p-3" 
                    placeholder="Digite seu email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) } 
                />

                <p className="text-amber-400 font-bold text-xl">Digite sua mensagem</p>
                <textarea
                    className="rounded-lg h-36 p-3"
                    placeholder="Digite aqui sua mensagem" 
                    value={message}
                    onChange={ (e) => setMessage(e.target.value) }
                >               
               

                </textarea>

                <button
                            type='submit'
                            className='bg-amber-400 p-4 text-slate-800 font-bold rounded-3xl shadow-2xl hover:scale-105 hover:transition-all hover:bg-amber-500'
                >
                        Envie sua mensagem!
                </button>


        </form>
        </div>
    )
}