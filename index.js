
import { AxioHttpService, Devtoolbox } from '@tiber/edge-devtoolbox';

const mySecretKey = process.env.API_KEY;
const baseURL = 'https://frontend-staging.apps1.dtb.one-edge.intel.com';

console.log('MY_SECRET_KEY:', mySecretKey);

function getEdgeDevToolBox() {
    let axioHttpService = new AxioHttpService({
        baseURL,
        timeout: 30000
    });
     
    return new Devtoolbox(axioHttpService);
}

function connectToDTB() {
    getEdgeDevToolBox().getHardwareClass().subscribe((data) => {
        console.log(data);
    })
}

connectToDTB();