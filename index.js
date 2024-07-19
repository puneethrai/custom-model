
import { AxioHttpService, Devtoolbox } from '@tiber/edge-devtoolbox';

const mySecretKey = process.env.API_KEY;

console.log('MY_SECRET_KEY:', mySecretKey);

function getEdgeDevToolBox() {
    let axioHttpService = new AxioHttpService({
        token: 'eyJhbGciOiJSUzUxMiJ9.eyJhY2Nlc3MiOlt7InJvbGUiOiJST0xFX0xQRC1CQVNJQyIsInByaXZpbGVnZXMiOlsiV3JpdGUiXX0seyJyb2xlIjoiUk9MRV9MUEQtUFJFTUlVTSIsInByaXZpbGVnZXMiOlsiV3JpdGUiXX0seyJyb2xlIjoiUk9MRV9EZXZDbG91ZC1FZGdlLUVudGVycHJpc2UiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX1dLCJhY2NvdW50RXhwaXJ5IjoiMjAyNS0wMi0xNCIsImRheXNMZWZ0IjoyMDksInVzZXJOYW1lIjoiaGltYW5zaHV4LndhZGh3YUBpbnRlbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImhpbWFuc2h1eDg0ODUiLCJ1c2VySWQiOjg0ODUsInN1YiI6ImhpbWFuc2h1eC53YWRod2FAaW50ZWwuY29tIiwiaWF0IjoxNzIxMzg0MTgwLCJleHAiOjE3MjE0MDIxODB9.pWBHECIebYAsfWe6HlKqKCsoAvl2Zidds1kDiXT1qX9Y6szy4so3mXjCvue8xjz6v1ngxzvmYiFklCCJ0NFiEg4DnOBy4t6OPMzx592yZZhF-bobbnF9skVqPdvilNJ43kVsme4f4iYKAxsG2gyEVbZafP4iDpZ_GOtKxo4UAjVxi01ryWB9N1bKPV0NhbBl3WKDX3Uca-ijfqZIBYF8PK9oPF0eJE7NoN9WkA3in-leUniXHWDMV_woIzxerElCAGlp8DF6lfb6l9NzbyVj50UvWHEgOE8eY0yeMMF2COxxtZkBIx7Bx1mGccac9Z2ODJsbVKKXliVPymKX9gLrwrPCt5npuH4PaVROvOyiE7xOvMhHh2Gy6uxvvx-4mBH2zR5ZwKbVph48zp_xTABWeBH7MhcOrz5lma6Xc14muGuTJ1ALVvB-Fns9PoYPbTz90oHI1K5AYPpMUzgI8vfvXPB4kH0W0Ei6f6lDxsX4onDPxQ4pQfUTJzTuNSCaYWNdUg3Hfb9LrATWx7rmVhguJehzf_9sf1zCoWSdj4uVfqcoBIsXJTEFw-MjyN6Nckz-2KsO30dGUbHeEdOP3-VOuA7vJM-XfFB2mYHkPkRVJ9M0_Q6ys2dU0xcVH79SgaGteT9jVl16XgXGqkkhstadDkC6-8b37j5duDJtrUD09CE',
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