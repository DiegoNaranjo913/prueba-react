import React from 'react';
import '../styles/form.scss';
import { useForm } from 'react-hook-form'
import axios from 'axios';


export default function Form() {

    const { register, handleSubmit, errors } = useForm();

    const Submit = (data, e) => {
        e.target.reset();
        console.log(data);
        console.log("buenas");
        var x = document.getElementById("div_loader");
        x.style.display = "flex";
    }



    return (
        <div className="center">
            <div className="form">
                <form onSubmit={handleSubmit(Submit)}>
                    <h2>Formulario</h2>
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        ref={
                            register({
                                required: "El campo nombre no debe ir vacío",
                                pattern: {
                                    value: /[A-Za-z ñ]+/,
                                    message: "El campo debe ser solo texto"
                                }
                            })
                        }
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        ref={
                            register({
                                required: "El campo email no debe ir vacío",
                                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "El email no tiene la estructura correcta"
                            })
                        }
                    />
                    <label>Celular</label>
                    <input
                        type="text"
                        name="phone"
                        ref={
                            register({
                                required: "El campo celular no debe ir vacío",
                                pattern: {
                                    value: /^3[\d]{9}$/,
                                    message: "El número del celular no es valido"
                                },
                            })
                        }
                    />
                    <label>Edad</label>
                    <input
                        type="text"
                        name="age"
                        ref={
                            register({
                                required: "El campo edad no debe ir vacío",
                                // pattern: {
                                //     value: /^[0 - 9]$/,
                                //     message: "La edad debe ser un número"
                                // },
                                min: {
                                    value: 18,
                                    message: "La edad minima es de 18"
                                },
                                max: {
                                    value: 100,
                                    message: "La edad maxima es de 100"
                                },
                            })
                        }
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    {errors.phone && <p className="error">{errors.phone.message}</p>}
                    {errors.age && <p className="error">{errors.age.message}</p>}
                    <div className="center">
                        <button >Guardar</button>
                    </div>
                </form>
            </div>
            <div className="div_loader">
                <div class="loader">

                </div>
            </div>
        </div>
    );
}