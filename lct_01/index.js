function getFullName(firstName, lastName, title = ''){
    return `${title} ${firstName} ${lastName}`
}

console.log(getFullName('Mehedi', 'Jaman', 'Mr.'))