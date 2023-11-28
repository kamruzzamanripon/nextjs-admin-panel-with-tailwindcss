import React, { useEffect, useState } from "react";

const Modal = ({ modal, setModal, headerTitle }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const handleSubmit = () => {
     // Reset modal state
    setModal(false);
  };

  useEffect(() => {
    if (!modal) {
      setSelectedImage();
    }
  }, [modal]);

  return (
    <>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay"></div>
          <div className="modal-container bg-white mx-auto rounded-lg shadow-lg overflow-y-auto w-[600px]">
            
            <div className="modal-header bg-purple-600 relative py-2">
              <p className="text-lg font-bold text-center text-white">{headerTitle}</p>
              <button className="close-button absolute top-2 right-2 w-6 h-6 bg-gray-400 rounded-full" onClick={() => setModal(false)}>
                <span className="text-white">&times;</span>
              </button>
            </div>

            <div className="modal-content px-6 py-4 space-y-4">
              <div className="flex justify-between">
                <label className="font-semibold pr-2">Name</label>
                <input
                  className="border-2 border-purple-600/50 w-[75%] "
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label className="font-semibold pr-2">Category</label>
                <select
                  className="border-2 border-purple-600/50 w-[75%] "
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose any Category</option>
                  <option value="Option One">Option One</option>
                  <option value="Option Two">Option Two</option>
                  <option value="Option Three">Option Three</option>
                </select>
              </div>
              <div className="flex-row justify-between">
                <label className="font-semibold pr-2">Picture</label>
                <input
                  className="border-2"
                  type="file"
                  accept="image/*"
                  name="user[image]"
                  multiple={true}
                  onChange={imageChange}
                />
                <div className="flex overflow-auto my-2 p-2">
                  {selectedImage &&
                    [...selectedImage].map((file, index) => (
                      <img key={index} src={URL.createObjectURL(file)} className="w-32 h-32 mr-1 rounded-sm border-4" />
                    ))}
                </div>
                {selectedImage && (
                  <button onClick={removeSelectedImage} className="bg-orange-400 p-2 rounded-md text-white">
                    Remove This Image
                  </button>
                )}
              </div>
              <div className="flex justify-between">
                <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <style jsx>{`
            .modal-overlay {
              background-color: rgba(0, 0, 0, 0.7);
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 40;
            }

            .modal-container {
              max-width: 90%;
              max-height: 90vh;
              overflow-y: auto;
              margin: 2rem auto;
              z-index: 50;
            }

            .modal-content {
              max-height: calc(100vh - 4rem);
            }
           
          `}</style>
        </div>
      )}
    </>
  );
};

export default Modal;
