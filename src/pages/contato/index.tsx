

function handleClick(){
    alert('clicou')
}

export function Contact(){
    return(
        <div className="bg-slate-700 relative px-4 py-5 h-auto w-full mt-10 flex items-center justify-center">
            
            <form
                className="px-4 flex flex-col relative bg-slate-700 gap-3 w-96 "
            >
                <p className="text-amber-400 font-bold text-3xl text-center">Deixe sua mensagem ou sugestão!</p>
                <p className="text-amber-400 font-bold text-xl mt-4">Digite seu nome</p>
                <input 
                    type="text"
                    className="rounded-lg h-11"
                    placeholder="Digite seu nome" 
                />

                <p className="text-amber-400 font-bold text-xl">Digite seu email</p>
                <input 
                    type="text"
                    className="rounded-lg h-11" 
                    placeholder="Digite seu email" 
                />

                <p className="text-amber-400 font-bold text-xl">Digite sua mensagem</p>
                <textarea
                    className="rounded-lg h-36"
                    placeholder="Digite aqui sua mensagem" 
                >               
               

                </textarea>

                <button
                            onClick={handleClick}
                            className='bg-amber-400 p-4 text-slate-800 font-bold rounded-3xl shadow-2xl hover:scale-105 hover:transition-all hover:bg-amber-500'
                >
                        Envie sua mensagem!
                </button>


        </form>
        </div>
    )
}