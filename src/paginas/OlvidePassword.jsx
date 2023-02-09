import { Link } from "react-router-dom"

const OlvidePassword = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Recupera tu acceso y no pierdas tus{""}
                    <span className="text-gray-900"> pacientes</span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Email de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <input 
                        type="submit"
                        value="Enviar instrucciones"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 hover:text-gray-100 md:w-auto"
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to="/"
                        className="block text-center text-gray-500 my-5 hover:text-gray-700"> 
                            ¿Ya tienes una cuenta?{""} <span className="font-bold" >Inicia sesión</span>
                    </Link>
                    <Link 
                        to="/registrar"
                        className="block text-center text-gray-500 my-5 hover:text-gray-700"> 
                            ¿No tienes una cuenta?{""} <span className="font-bold" >Regístrate</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default OlvidePassword