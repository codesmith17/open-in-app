import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

const ExcelViewer = () => {
  const [excelData, setExcelData] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showData, setShowData] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Initialize selected tags array with empty strings
      const initialTags = Array(jsonData.length).fill("");
      setSelectedTags(initialTags);

      setExcelData(jsonData);
      setShowData(true);
    };

    reader.readAsBinaryString(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xlsx, .csv",
  });

  const handleTagChange = (rowIndex, event) => {
    const newTag = event.target.value;
    const updatedTags = [...selectedTags];
    updatedTags[rowIndex] = newTag;
    setSelectedTags(updatedTags);
  };

  const handleUpload = () => {
    // Add any additional logic here before uploading
    // For example, you can send the data to a server or perform other operations
    console.log("Uploading data:", excelData);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto mb-8 text-center">
        {/* Logo goes here */}
        <img
          src="src\assets\Microsoft_Excel-Logo.wine.png"
          alt="Logo"
          className="mx-auto  h-16"
        />
        <h2 className="text-xl font-bold text-[#746fff]">
          Drop your Excel file or{" "}
        </h2>
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("fileInput").click();
            }}
            className="text-[#746fff] underline cursor-pointer"
          >
            browse
          </a>
        </p>
        <button
          className="bg-[#746fff] text-white px-4 py-2 rounded mt-2"
          onClick={handleUpload}
          disabled={!excelData}
        >
          Upload
        </button>
      </div>

      <div
        {...getRootProps()}
        className={`mx-auto dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} id="fileInput" accept=".xlsx,.csv,.xls" />
        <p className="text-center">
          Click here or drag 'n' drop an Excel (.xlsx) file
        </p>
      </div>

      {showData && excelData && (
        <div className="mt-8">
          <h2>Excel Data:</h2>
          <table className="min-w-full bg-white border border-[#746fff]">
            <thead>
              <tr className="bg-[#746fff] text-white">
                {excelData[0].map((header, index) => (
                  <th key={index} className="py-2 px-4">
                    {header}
                  </th>
                ))}
                <th className="py-2 px-4">Tags</th>
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="py-2 px-4 border border-[#746fff]"
                    >
                      {cell}
                    </td>
                  ))}
                  <td className="py-2 px-4 border border-[#746fff]">
                    <select
                      className="border-[#746fff] rounded p-1"
                      value={selectedTags[rowIndex] || ""}
                      onChange={(e) => handleTagChange(rowIndex, e)}
                    >
                      <option value="" disabled>
                        Select Tag
                      </option>
                      <option value="Tag1">Tag1</option>
                      <option value="Tag2">Tag2</option>
                      <option value="Tag3">Tag3</option>
                      {/* Add more tags as needed */}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelViewer;