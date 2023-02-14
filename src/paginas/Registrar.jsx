import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";

const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    const [alerta, setAlerta] = useState({})

    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({msg: 'Hay campos vacíos', error: true});
            return;
        }

        if(password !== repetirPassword) {
            setAlerta({msg: 'los passwords son diferentes', error: true});
            return;
        }
        
        if (password < 6) {
            setAlerta({msg:'El password es muy corto', error: true});
            return;
        }

        setAlerta({});

        console.log("enviando form...");
    }

    const { msg } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Crea tu cuenta y administra tus{""}
                    <span className="text-gray-900"> pacientes</span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                {msg && <Alerta
                    alerta={alerta}
                />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Nombre
                        </label>
                        <input 
                            type="text"
                            placeholder="Tu nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Email de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Repetir password
                        </label>
                        <input 
                            type="password"
                            placeholder="Email de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={repetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    <input 
                        type="submit"
                        value="Crear cuenta"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 hover:text-gray-100 md:w-auto"
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to="/"
                        className="block text-center text-gray-500 my-5 hover:text-gray-700"> 
                            ¿Ya tienes una cuenta?{""} <span className="font-bold" >Inicia sesión</span>
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

export default Registrar