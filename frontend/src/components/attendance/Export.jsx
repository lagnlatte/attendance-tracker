import "../../styles/Export.css";
import Button from "../Button";

function Export({ selected, onExportCSV, onExportXLSX }) {
  return (
    <div className="export-container">
      <div className="export-text">
        <p>
          {selected} {selected === 1 ? "session" : "sessions"} selected
        </p>
      </div>
      <div className="buttons">
        <Button
          text="Export as CSV"
          onClick={onExportCSV}
          color="#FFF"
          textColor="#1D61E7"
        ></Button>
        <Button text="Export as XLSV" onClick={onExportXLSX}></Button>
      </div>
    </div>
  );
}

export default Export;
