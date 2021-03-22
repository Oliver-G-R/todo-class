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

export {
    getFristLetter,
    getColorTypeMail,
    getTypeMail
}