const mySecretKey = process.env.API_KEY;

console.log('MY_SECRET_KEY:', mySecretKey);

function connectToDTB(secretKey) {
    if (secretKey) {
        console.log(`Connecting to the application with secret key: ${secretKey}`);
    } else {
        console.error('No secret key provided. Cannot connect to the application.');
    }
}

// use the secret key to connect to the application
connectToDTB(mySecretKey);