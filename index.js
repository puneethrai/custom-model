const mySecretKey = 'dtb_user_4cc5f16f46bf4d34a1d952fd2ef647a3' //process.env.API_KEY;

console.log('MY_SECRET_KEY:', mySecretKey);

async function connectToDTB(endpoint) {
    const url = `${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySecretKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// use the secret key to connect to the application
connectToDTB('https://frontend-staging.apps1.dtb.one-edge.intel.com/');