"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Generate = () => {
  const [handle, sethandle] = useState("");
  const [links, setLinks] = useState([{ linktext: "", link: "" }]);
  const [photo, setphoto] = useState("");
  const [photodes, setphotodes] = useState("");

  // add new link field
  const addNewLinkField = () => {
    setLinks([...links, { linktext: "", link: "" }]);
  };

  // handle the inputs edit
  const handleInputChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const addinfo = async (handle, links, photo, photodes) => {
    const allFilled = links.every(
      (item) => item.linktext.trim() !== "" && item.link.trim() !== "",
    );
    if (handle && allFilled && photo && photodes) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      // data's
      const raw = JSON.stringify({
        handle: handle,
        links: links,
        photo: photo,
        photodes: photodes,
      });

      // about request
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      // fetching the data to show the message
      const r = await fetch("http://localhost:3000/api/add", requestOptions);
      const result = await r.json();
      if (result.success) {
        toast(result.message);

        // make all the state empty again after ir is done
        sethandle("");
        setLinks([{ linktext: "", link: "" }]);
        setphoto("");
        setphotodes("");
      } else {
        toast.error(result.message);
      }
    } else {
      toast("Please fill all the information first");
      return;
    }
  };

  return (
    <div className="bg-[#1d242f] min-h-screen grid min-[923px]:grid-cols-2 max-[923px]:pt-[36vw] pt-[10vw]">
      <div className="col1 flex justify-center min-[923px]:items-baseline-last items-center flex-col text-gray-900">
        <ToastContainer />
        <div className="flex w-[94%] max-w-[780px] flex-col gap-5 my-8 object-contain">
          <h1 className="font-bold text-center text-4xl text-white">
            Create your Linktree
          </h1>
          <div className="item">
            <h2 className="font-semibold text-2xl text-white">
              Step 1: Claim your Handle
            </h2>
            <div>
              <input
                className="px-4 py-2 my-2 bg-white w-full focus:outline-pink-300 rounded-full"
                type="text"
                value={handle}
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                placeholder="Choose a Handle"
              />
            </div>
          </div>
          <div className="item">
            <h2 className="font-semibold text-2xl text-white">
              Step 2: Add Links
            </h2>
            {links.map((item, index) => (
              <div key={index} className="flex flex-wrap gap-2 mb-2">
                <input
                  className="px-4 bg-white py-2 w-[48%] focus:outline-pink-300 rounded-full"
                  type="text"
                  value={item.linktext}
                  onChange={(e) =>
                    handleInputChange(index, "linktext", e.target.value)
                  }
                  placeholder="Enter link text"
                />
                <input
                  className="px-4 bg-white py-2 w-[48%] focus:outline-pink-300 rounded-full"
                  type="text"
                  value={item.link}
                  onChange={(e) =>
                    handleInputChange(index, "link", e.target.value)
                  }
                  placeholder="Enter link"
                />
              </div>
            ))}

            <button
              onClick={addNewLinkField}
              type="button"
              className="p-5 py-2 mt-4 cursor-pointer bg-[#d1e823] font-bold rounded-3xl"
            >
              + Add Link
            </button>
          </div>

          <div className="item mt-2 ">
            <h2 className="font-semibold text-2xl text-white">
              Step 3: Add Picture and Description
            </h2>
            <div className=" flex flex-col">
              <input
                className="px-4 bg-white py-2 my-2 focus:outline-pink-300 rounded-full"
                type="text"
                value={photo}
                onChange={(e) => {
                  setphoto(e.target.value);
                }}
                placeholder="Enter link to your Picture"
              />
              <input
                className="px-4 bg-white py-2 my-2 focus:outline-pink-300 rounded-full"
                type="text"
                value={photodes}
                onChange={(e) => {
                  setphotodes(e.target.value);
                }}
                placeholder="Enter description"
              />
              <button
                onClick={() => {
                  addinfo(handle, links, photo, photodes);
                }}
                className="disabled:bg-slate-500 cursor-pointer p-5 py-2 w-full my-4 bg-[#d1e823]  font-bold rounded-3xl "
              >
                Create your Linktree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-full flex justify-start bg-[#1d242f]">
        <img
          className="h-full max-h-[700px] max-[923px]:mt-[-44px] max-[923px]:min-h-[100vw] my-auto object-contain "
          src="/side photo.png"
          alt="Generate your links"
        />
      </div>
    </div>
  );
};

export default Generate;
