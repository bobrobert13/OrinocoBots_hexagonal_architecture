import axios from "axios";
import { botAuth } from "../../domain/repository/botAuth";
import { config } from "../../infraestructure/config";


export class AuthenticationBot implements botAuth {
    async Login(): Promise<any> {
        let tokenData;
        console.log("INICIANDO_AUTHENTICACION");
        const bodyGraphql = {
            query: `
              query loginQuery($email: String!, $password: String!) {
                Login(email: $email, password: $password) {
                  token {
                    code
                    expire
                }
                user {
                    id
                    image
                    security{permissions{status}}
                    dni
                    firstName
                    lastName
                    fullName
                    email
                    role
                    createdAt
                    modules
                }
                }
              }
            `,
            variables: {
                email: 'colibri2@orinoco.io',
                password: 'orinoco'
            }
        };

        await axios.post(config.orinocoGraphql.url, bodyGraphql, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            // console.log("_RESPONSE TOKEN__", response.data.data.Login.token);
            tokenData = response.data.data.Login.token.code;
            // console.log("_RESPONSE USER__", response.data.data.Login.user);
        }).catch(error => {
            console.error(error);
        });

        return tokenData;
    }
}