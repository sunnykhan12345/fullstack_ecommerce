import React from "react";

const FileList = () => {
  const files = [
    { name: "19.pdf", type: "PDF", size: "9mb" },
    { name: "Screenshot-3817.png", type: "PNG", size: "4mb" },
    { name: "sharefile.docx", type: "DOC", size: "555kb" },
    { name: "Jerry-2020_1-9_Form.xxl", type: "XXL", size: "24mb" },
    { name: "19.pdf", type: "PDF", size: "9mb" },
  ];

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-6">Files 125</h1>
      <div className="space-y-3">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <span className="text-gray-700">{file.name}</span>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {file.type}
              </span>
              <span className="text-sm text-gray-500">{file.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileList;
