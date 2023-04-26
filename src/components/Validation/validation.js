const validation = (userData) => {
    const errors = {};

    if (!userData.email) {
        errors.email = 'Se debe ingresar un email'
    }

    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)) {
        errors.email = 'El email ingresado no es válido'
    }

    if (userData.email.length > 35) {
        errors.email = 'El email no debe contener más de 35 caracteres'
    }

    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número'
    }
    
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres'
    }
    // if (!/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,10}$/) {
    //     errors.password = 'La contraseña debe contener entre 6 y 10 caracteres y al menos un numero'
    // }

    return errors;
}

export default validation