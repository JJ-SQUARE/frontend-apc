import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState(false);

    const params = useParams();
    const { id } = params;
    console.log(id);

    useEffect(() => {
        const confirmarCuenta = async () =>{
            try {
                const url = `veterinarios/confirmar/${id}`;
                const { data } = await clienteAxios(url);
                setCuentaConfirmada(true);
                setAlerta({
                    msg: data.msg
                })
            } catch (error) {
                  setAlerta({ 
                      msg: error.response.data.msg, 
                      error: true});
            }
            setCargando(false);
        }
        confirmarCuenta();
    })

    console.log(params);
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Confirma tu cuenta y comienza a administrar tus{""}
                    <span className="text-gray-900"> pacientes</span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                {!cargando && 
                    <Alerta 
                        alerta={alerta}
                    />}

                    {cuentaConfirmada && (
                        <Link 
                            to="/"
                            className="block text-center text-gray-500 my-5 hover:text-gray-700 font-bold" >Iniciar sesión
                        </Link>
                        
                    )}
            </div>
    
    
    </>
  )
}

export default ConfirmarCuenta