import React from "react";
import CryptoJS from 'crypto-js';

const Criptografia = props => {

    const encryptedPassword = CryptoJS.AES.encrypt('senha', 'my-secret-key').toString();

    const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, 'my-secret-key').toString(CryptoJS.enc.Utf8);

    return (
        <div>
            {decryptedPassword}
        </div>
    )
}

export default Criptografia;