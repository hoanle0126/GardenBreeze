/* eslint-disable react/prop-types */
import { Close, Upload } from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import { VisuallyHiddenInput } from "~/Components/VisuallyHiddenInput";
import { useState } from "react";
import { uploadToCloudinary } from "~/utils/uploadToCloudinary";
import { axiosClient } from "~/axios/AxiosClient";

const AddStaff = ({ open, handleClose }) => {
  const [staff, setStaff] = useState({
    role: 3,
  });

  const handleSelectImage = async (e) => {
    const imgUrl = await uploadToCloudinary(e.target.files[0]);
    setStaff({
      ...staff,
      avatar: imgUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post("/users", staff).then(handleClose);
    console.log(staff);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form
        onSubmit={handleSubmit}
        className="w-[550px] pb-[10px] bg-white shadow rounded-lg absolute-center relative"
      >
        <Close
          className="absolute right-[5px] top-[5px] cursor-pointer text-gray-500 hover:text-red/70 duration-300"
          onClick={handleClose}
        />
        <div className="h-[50px] flex items-center text-[21px] px-[30px] border-b border-dashed font-[600]">
          Add Staff
        </div>
        <div className="px-[50px] h-[400px] flex flex-col gap-[30px] py-[20px] overflow-y-auto">
          <div className="flex text-[18px] gap-[30px] items-end">
            <Avatar
              src={staff?.avatar}
              variant="rounded"
              sx={{ width: 100, height: 100 }}
            />
            <Button
              component="label"
              variant="contained"
              startIcon={<Upload />}
            >
              <VisuallyHiddenInput type="file" onChange={handleSelectImage} />
              Upload
            </Button>
          </div>
          <div className="flex text-[18px] items-center">
            <span className="w-[130px]">Email</span>
            <input
              value={staff?.email}
              className="border h-[40px] flex-1 rounded-md outline-none px-[10px] text-[14px]"
              onChange={(e) => setStaff({ ...staff, email: e.target.value })}
            />
          </div>
          <div className="flex text-[18px] items-center">
            <span className="w-[130px]">Fullname</span>
            <input
              value={staff?.name}
              className="border h-[40px] flex-1 rounded-md outline-none px-[10px] text-[14px]"
              onChange={(e) => setStaff({ ...staff, name: e.target.value })}
            />
          </div>
          <div className="flex text-[18px] items-center">
            <span className="w-[130px]">Address</span>
            <input
              value={staff?.address}
              className="border h-[40px] flex-1 rounded-md outline-none px-[10px] text-[14px]"
              onChange={(e) => setStaff({ ...staff, address: e.target.value })}
            />
          </div>
          <div className="flex text-[18px] items-center">
            <span className="w-[130px]">Phone</span>
            <input
              type="number"
              value={staff?.phone}
              className="border h-[40px] flex-1 rounded-md outline-none px-[10px] text-[14px]"
              onChange={(e) => setStaff({ ...staff, phone: e.target.value })}
            />
          </div>
          <div className="flex text-[18px]">
            <span className="w-[130px]">Role</span>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={staff?.role}
                name="radio-buttons-group"
                onChange={(e) => setStaff({ ...staff, role: e.target.value })}
              >
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Shipper"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Manager"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="w-full px-[50px] mt-[30px] mb-[10px]">
          <Button
            variant="contained"
            sx={{ textTransform: "none", fontSize: 18 }}
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddStaff;
