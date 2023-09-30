import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { auth } from '../../firebaseConnection/firebaseConnection'
import { createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import toast from 'react-hot-toast'


const schema = z.object({
    name: z.string().nonempty('O campo nome é obrigatório'),
    email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').nonempty('O campo senha é obrigatório')
  })
  
  type FormData = z.infer<typeof schema>
  
  export function Register() {
  
    
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: 'onChange'
    })
  
    useEffect(() => {
      async function handleLogout(){
        await signOut(auth)
      }
  
      handleLogout();
    }, [])
  
      async function onSubmit(data: FormData){
          createUserWithEmailAndPassword(auth, data.email, data.password).then(async (user) => {
              await updateProfile(user.user, {
                  displayName: data.name
              })
              
              console.log('Cadastrado com sucesso');
              toast.success("Bem vindo à KPPNEUS!")
              navigate('/dashboard', {replace: true})
              
          }).catch((error) => {
  
              console.log('Erro ao cadastrar usuário');            
              console.log(error);
              toast.error("Erro ao cadastrar usuário!")
              
          })
          
      }
   
    return(
        <div className="bg-slate-700 relative px-4 py-5 h-auto w-full mt-10 flex items-center justify-center">
            
            <form
                className="px-4 flex flex-col relative bg-slate-700 gap-3 max-w-xl w-full "
                onSubmit={handleSubmit(onSubmit)}                
            >
                <p className="text-amber-400 font-bold text-3xl text-center">Bem vindo a área do administrador</p>                
                <p className="text-amber-400 font-bold text-xl">Digite seu nome</p>
                <div className='mb-3'>
                    <Input
                        type='text'
                        placeholder='Digite seu nome completo...'
                        name='name'
                        error={errors.name?.message}
                        register={register}
                    />
                </div>

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
                        Cadastrar
                </button>

                <Link to='/login'>
                    Já possui uma conta? Faça o login!
                </Link>

        </form>
        </div>
    )
}