import React from "react";
import CryptoJS from 'crypto-js';

const Criptografia02 = props => {

    const token = CryptoJS.AES.encrypt('Aleatório', 'my-secret-token').toString();

    const decryptedtoken = CryptoJS.AES.decrypt(token, 'my-secret-token').toString(CryptoJS.enc.Utf8);

    return (
        <div>
            {decryptedPassword}
        </div>
    )
}

export default Criptografia02;