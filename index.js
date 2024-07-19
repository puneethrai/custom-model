
import { AxioHttpService, Devtoolbox } from '@tiber/edge-devtoolbox';

const mySecretKey = process.env.API_KEY;

console.log('MY_SECRET_KEY:', mySecretKey);

function getEdgeDevToolBox() {
    let axioHttpService = new AxioHttpService({
        baseURL: 'https://frontend-staging.apps1.dtb.one-edge.intel.com',
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