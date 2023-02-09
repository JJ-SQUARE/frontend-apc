import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Inicia sesión y administra tus{""}
                    <span className="text-gray-900"> pacientes</span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div>
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
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Password
                        </label>
                        <input 
                            type="Tu password"
                            placeholder="Email de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                        <input 
                            type="submit"
                            value=" Iniciar sesión"
                            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 hover:text-gray-100 md:w-auto"
                        />
                    </div>
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to="/registrar"
                        className="block text-center text-gray-500 my-5 hover:text-gray-700"> 
                            ¿No tienes una cuenta? <span className="font-bold" >Regístrate</span>
                    </Link>
                    <Link to="/olvide-password" 
                        className="block text-center text-gray-500 my-5 hover:text-gray-700">
                            Olvidé mi password
                    </Link>
                </nav>
            </div>
            
        </>
  )
}

export default Login