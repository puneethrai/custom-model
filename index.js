
import { AxioHttpService, Devtoolbox } from '@tiber/edge-devtoolbox';


const mySecretKey = 'dtb_user_4cc5f16f46bf4d34a1d952fd2ef647a3' //process.env.API_KEY;

console.log('MY_SECRET_KEY:', mySecretKey);
const token = 'eyJhbGciOiJSUzUxMiJ9.eyJhY2Nlc3MiOlt7InJvbGUiOiJST0xFX0xQRC1CQVNJQyIsInByaXZpbGVnZXMiOlsiV3JpdGUiXX0seyJyb2xlIjoiUk9MRV9MUEQtUFJFTUlVTSIsInByaXZpbGVnZXMiOlsiV3JpdGUiXX0seyJyb2xlIjoiUk9MRV9EZXZDbG91ZC1FZGdlLUVudGVycHJpc2UiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX1dLCJhY2NvdW50RXhwaXJ5IjoiMjAyNS0wMi0xNCIsImRheXNMZWZ0IjoyMTAsInVzZXJOYW1lIjoiaGltYW5zaHV4LndhZGh3YUBpbnRlbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImhpbWFuc2h1eDg0ODUiLCJ1c2VySWQiOjg0ODUsInN1YiI6ImhpbWFuc2h1eC53YWRod2FAaW50ZWwuY29tIiwiaWF0IjoxNzIxMzAzMTkwLCJleHAiOjE3MjEzMjExOTB9.NAm2uX-_vIZOimRoyoGgjFUd-xxx6HsAnEDQVcW4EKlf5Nzpck040eZS4M2OwAN3F51jB3RR7o9LkLIyXkwwWF3yz7vU71VwASFkTuzQWDVndb0pP_xFDkF_E8KFPdZn9kqZyNHocf70w3eurmDecNACPUTQ72JFqJvwr-qwRoA2Bx4viS2ZKmjZ3Sjpgo-0gEDvVKstkbKJIA0Urwved5pRdeMmkgw4_0Hr1K0BwC3flEDD9mhiX5Lq4fK3pROs-HcGytQ_fJ2P41dSkIQmaQfffKdgY4l_pR7jFy8kLKB6k_T1bUqcGhACSHmWugkyPj63ix-IDyCIrt3zARHRSa1eGQ0EI0K8KdIpNnQmqw4INes4XK8pvkdOBXaAZTozITpPHGVQBtPOe6qZfDu-zUeqxfmeYul9hADi6Kh0LV5gV4m2dacD9IryHE65BYZj96QiGte58CwrejWtzom2RUYKOcwMDlhdEEojCouPf2QK3g2EWd_rlJuRW9Zk2VPARfdDS-lwvSHcIdzKWYduqXqIhWjTvHF676xJ9YAX64wxXRiKFBUkRWkyRJ5Y9dhC9sSEkrZdKuFFbZr-C6m00PKbz70dlQEG78AJUXtts5_IODzgy7gqueYoBIgOTSuZmOIlvXX3_YA-eaVLvpHhqTB662ze3b9rya8cnHfYAU8'

function getEdgeDevToolBox() {
    let axioHttpService = new AxioHttpService({
        accessToken: token,
        baseURL: 'https://frontend-staging.apps1.dtb.one-edge.intel.com',
        timeout: 30000
    });
     
    return new Devtoolbox(axioHttpService);
}

function connectToDTB() {
    getEdgeDevToolBox().getEdgeNodes().subscribe((data) => {
        console.log('edge nodes...', data)
      },() => {
      });
}

connectToDTB();