import React, { useState } from "react";

const File = props =>{
    
    const [file, setFile] = useState(null);
      
    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    }
      
    const handleFileSave = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const fileData = event.target.result;
            // Aqui você pode escrever o arquivo em um local específico
            console.table(fileData);
        }
        reader.readAsText(file);
    }

    return(
        <div>
            <input type="file" onChange={handleFileUpload} />
            <button onClick={handleFileSave}>Salvar</button>
        </div>
    )
}

export default File;