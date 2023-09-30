
import { auth } from '../../firebaseConnection/firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input';


const schema = z.object({
    email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
    password: z.string().nonempty('O campo senha é obrigatório')
  })
  
  type FormData = z.infer<typeof schema>

export function Login(){        
       
        const navigate = useNavigate();   
        const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
            resolver: zodResolver(schema),
            mode: 'onChange'
          })        
        
        
        function onSubmit(data: FormData){
                signInWithEmailAndPassword(auth, data.email, data.password).then((user) => {
                    console.log('Logado com sucesso');
                    console.log(user); 
                    toast.success("Logado com sucesso!");                      
                    navigate('/dashboard', {replace: true});
                    
                }).catch(err => {
                    console.log('Erro ao logar');
                    console.log(err);
                    toast.error("Erro ao fazer o login!")           
                    
                })
                
            }


    return(
        <div className="bg-slate-700 relative px-4 py-5 h-auto w-full mt-10 flex items-center justify-center">
            
            <form
                className="px-4 flex flex-col relative bg-slate-700 gap-3 max-w-xl w-full "
                onSubmit={handleSubmit(onSubmit)}                
            >
                <p className="text-amber-400 font-bold text-3xl text-center">Bem vindo a área do administrador</p>                
                <p className="text-amber-400 font-bold text-xl">Digite seu email</p>
                <div className="mb-3" >
                    <Input 
                        type='email'
                        placeholder='Digite seu email...'
                        name='email'
                        error={errors.email?.message}
                        register={register}
                    />
                </div>

                <p className="text-amber-400 font-bold text-xl">Digite sua senha</p>
                <div className="mb-3" >
                    <Input
                        type='password'
                        placeholder='Digite sua senha...'
                        name='password'
                        error={errors.password?.message}
                        register={register}
                    />
                </div>
                              
               

                <button                            
                    type='submit'
                    className='bg-amber-400 p-4 text-slate-800 font-bold rounded-3xl shadow-2xl hover:scale-105 hover:transition-all hover:bg-amber-500'
                >
                        Acessar
                </button>


        </form>
        </div>
    )
}