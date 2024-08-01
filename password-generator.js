const generator = require('generate-password');

function generateRandomPassword() {
    const password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log(password);
}

generateRandomPassword();
