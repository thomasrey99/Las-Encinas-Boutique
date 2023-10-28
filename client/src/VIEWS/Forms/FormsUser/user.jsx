import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Validates  from './validates';
import { useCreateUsersMutation } from '../../../libs/redux/services/usersApi'


const FormUser = () => {
    // const dispatch = useDispatch()
    const userForm = useSelector(state => state.user)
    const [mutate] = useCreateUsersMutation();
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        // phone: '',
        password: ''
    })

    let [errors, setErrors] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        // phone: '',
        password: ''
    })

    const [isFormValid, setIsFormValid] = useState(false);

    const handlerCange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        const newErrors = { ...errors };

        Validates({
            ...form,
            [e.target.name]: e.target.value
        },
            newErrors,
            setErrors
            );
            const hasErrors = Object.values(newErrors).some((error) => error !== '');
            setIsFormValid(!hasErrors);
    }
    
    const handlerSubmit = async (event) => {
        event.preventDefault();
        
        if (
            !form.name ||
            !form.lastName ||
            !form.address ||
            !form.email ||
            // !form.phone ||
            !form.password 
        ) {
            alert('Por favor complete todos los campos')
            return;
        }
        //agregar dispatch
        try {
           await mutate(form);
           console.log();
        } catch (error) {
            return error
        }
    }
console.log(form);
    return (
        <div>
            <h1>Registro de Usuario</h1>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="name">Nombre: </label>
                <input type="text" name= 'name'  placeholder='Ingresar nombre...' onChange={handlerCange} />
                {errors.name !== '' ? <span>{errors.name}</span> : ''}
                <hr />
                <label htmlFor="lastName">Apellido: </label>
                <input type="text" name= 'lastName'  placeholder='Ingresar apellido...' onChange={handlerCange} />
                {errors.lastName !== '' ? <span>{errors.lastName}</span> : ''}
                <hr />
                <label htmlFor="address">Dirección: </label>
                <input type="text" name= 'address'  placeholder='Ingresar dirección...' onChange={handlerCange} />
                {errors.address !== '' ? <span>{errors.address}</span> : ''}
                <hr />
                <label htmlFor="email">E-Mail: </label>
                <input type="text" name= 'email'  placeholder='Escribe tu e-mail...' onChange={handlerCange} />
                {errors.email !== '' ? <span>{errors.email}</span> : ''}
                <hr />
                {/* <label htmlFor="phone">Teléfono: </label>
                <input type="text" name= 'phone'  placeholder='Dejanos tu contacto...' onChange={handlerCange} />
                {errors.phone !== '' ? <span>{errors.phone}</span> : ''}
                <hr /> */}
                <label htmlFor="password">Contraseña: </label>
                <input type="text" name= 'password'  placeholder='Debe ser secreta...' onChange={handlerCange} />
                {errors.password !== '' ? <span>{errors.password}</span> : ''}
                <hr />

                <button type='submit' disabled={!isFormValid} >REGISTRAR</button>
            </form>
        </div>
    )
};

export default FormUser;