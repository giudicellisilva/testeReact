import React, {useState} from "react";
import Excel from "exceljs";


const App = props =>{

    const [file, setFile] = useState();
    
    const headExel = () =>{

        console.log("Arquivo: " + file)
        const workbook = new Excel.Workbook();
       
        
        const wb = new Excel.Workbook();
        const reader = new FileReader();

        reader.readAsArrayBuffer(file)
        reader.onload = () => {
        const buffer = reader.result;
        wb.xlsx.load(buffer).then(workbook => {
            console.log(workbook, 'workbook instance')
            workbook.eachSheet((sheet, id) => {
            sheet.eachRow((row, rowIndex) => {
            console.log(row.values, rowIndex)
        })
      })
    })
  }
       

    }

    return(
        <div className="dropzone">
            <input className="dropzone__content" type="file" onChange={ (e) => setFile(e.target.files[0]) } />
            <button onClick={headExel}>Ler Exel</button>
        </div>
    )
}

export default App;