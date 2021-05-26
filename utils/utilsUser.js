const getFristLetter = name =>
    name.charAt(0).toUpperCase();


const getColorTypeMail = mail => {
    var tyMail = getTypeMail(mail).toLowerCase()

    let colorMail = ''

    switch (tyMail) {
        case 'gmail':
            colorMail = '#EA4335'
            break;
        case 'hotmail':
        case 'outlooks':
            colorMail = '#006DBF'
            break;
        case 'yahoo':
            colorMail = '#5F00CA'
            break;
        default:
            colorMail = '#C0C0C0'
            break;
    }

    return colorMail
}

const getTypeMail = mail => {
    var getInfoMail = /^([^]+)@(\w+).(\w+)$/.exec(mail);


    return getInfoMail ? getInfoMail[2].toUpperCase() : ''
}

const validShareData = ({name, lastName, subject, group, degree, description, tel, email}) =>`
        Te comparto mi contacto :D

        Nombre: ${name} ${lastName}
        Correo: ${email}
        Tel: ${tel}
        Materia: ${subject} 
        Grupo: ${group} 
        Grado: ${degree} 
        Descripcion: ${description}
    `

export {
    getFristLetter,
    getColorTypeMail,
    getTypeMail,
    validShareData
}