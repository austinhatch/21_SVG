import logo from './head.png';
import './App.css';

import { useState } from 'react';
import ColorPicker from './color-picker';
import Combobox from "react-widgets/Combobox";

function App() {
  const [uploadFile, setUploadFile] = useState(null)
  const [colors, setColors] = useState([])
  const [numCols, setNumCols] = useState(1)
  const [downloadFile, setDownloadFile] = useState(null)
  
  function parseImage(){

  }

  function imageToSvg(){

  }

  function onNumColsChange(){

  }

  function changePalette(){

  }

  const afterSubmission = (event) => {
    event.preventDefault();
    // setRecord(() => ({ description: '', recordType: '', recordDate: '' }))
    // document.getElementById("form").reset();
    // setFile(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <text className='nameText'>21_SVG</text>
        <p></p>
        <input className="fileUpload" type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
      </header>
      <table className="ColorTable">
        <tr></tr>
          <td>
            <form className="form" id="form" onSubmit={afterSubmission}>
              <label className="numColsLabel">Number of Colors: </label>
              <select className="numColsSelect" onChange={onNumColsChange}>
                <option selected value="1" >1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <table>
                <tr id='color1'><p>Color 1</p><ColorPicker></ColorPicker></tr>
                <tr id='color2'><p>Color 2</p><ColorPicker></ColorPicker></tr>
                <tr id='color3'><p>Color 3</p><ColorPicker></ColorPicker></tr>
                <tr id='color4'><p>Color 4</p><ColorPicker></ColorPicker></tr>
                <tr id='color5'><p>Color 5</p><ColorPicker></ColorPicker></tr>
              </table>
              <p></p>
              <p></p>
            </form>
            <button type="submit" className="submitButton" onClick={changePalette}>21, can you do somethin' for me?</button>

          </td>
          <td>
              <img className="svg-viewer" src={downloadFile}></img>

          </td>
      </table>
    </div>
  );
}

export default App;