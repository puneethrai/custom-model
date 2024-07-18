const mySecretKey = process.env.API_KEY;

console.log('MY_SECRET_KEY:', mySecretKey);

// Example function to connect to the application
function connectToDTB(secretKey) {
    if (secretKey) {
        console.log(`Connecting to the application with secret key: ${secretKey}`);
        // Add your connection logic here
        // For example, connecting to a database or an external service
    } else {
        console.error('No secret key provided. Cannot connect to the application.');
    }
}

// Check and use the secret key to connect to the application
connectToDTB(mySecretKey);