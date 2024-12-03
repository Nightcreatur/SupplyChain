import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import Button from "../../components/Buttons/Button";

const AddShipmentModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState([]);
  const [formValues, setFormValues] = useState({
    productName: "",
    productId: "",
    pickupLocation: "",
    dropLocation: "",
    phoneNumber: "",
    amount: "",
    description: "",
  });

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddShipment = () => {
    const shipmentData = {
      ...formValues,
      files,
    };
    console.log("Shipment Data:", shipmentData);

    alert("Shipment added successfully!");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [".jpeg", ".jpg"], "image/png": [".png"] },
  });

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-stretch justify-center z-50">
      <div className="bg-white w-[848px] rounded-lg shadow-lg relative flex flex-col h-full">
        <div className="bg-[#f5f5f5] rounded-t-lg flex justify-between pt-2 px-4">
          <h2 className="text-lg font-semibold mb-4">Add Shipment</h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 text-2xl hover:bg-gray-200 focus:outline-none"
          >
            &times;
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6 overflow-y-auto flex-grow">
          {[
            { label: "Product Name", name: "productName", type: "text" },
            { label: "Product ID", name: "productId", type: "text" },
            { label: "Pickup Location", name: "pickupLocation", type: "text" },
            { label: "Drop Location", name: "dropLocation", type: "text" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            { label: "Amount", name: "amount", type: "number" },
          ].map((field) => (
            <div key={field.name} className="space-y-2 flex flex-col">
              <label htmlFor={field.name} className="font-semibold text-xs">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formValues[field.name]}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-md text-xs"
                placeholder={`Type ${field.label}`}
              />
            </div>
          ))}

          <div className="space-y-2 flex flex-col col-span-2">
            <label htmlFor="description" className="font-semibold text-xs">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              className="w-full min-h-[120px] border border-gray-300 p-2 rounded-md text-xs"
            />
          </div>

          <div
            {...getRootProps()}
            className={`w-full col-span-2 border-[1px] border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragActive
              ? "border-primary bg-primary/5"
              : "border-[#003DFF]"
              }`}
          >
            <input {...getInputProps()} />
            <UploadCloud className="mx-auto h-12 w-12 bg-[#003DFF] text-white rounded px-2" />
            <p className="mt-2 text-sm text-gray-400">
              Drag & Drop or{" "}
              <span className="text-[#003DFF] font-medium">choose file</span> to
              upload
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Supported format: jpeg, png
            </p>
            {files.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium">Selected files:</p>
                {files.map((file) => (
                  <p key={file.name} className="text-sm text-muted-foreground">
                    {file.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </form>

        <div className="flex justify-center space-x-2 p-4 mt-[20px]">
          <button onClick={handleAddShipment}>demo</button>
          <Button onClick={handleAddShipment} text="Add Shipment" bgColor="#003DFF" textColor="white" />
        </div>
      </div>
    </div>
  ) : null;
};

export default AddShipmentModal;
