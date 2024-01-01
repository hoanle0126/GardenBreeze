/* eslint-disable react/prop-types */
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button, Modal, Rating } from "@mui/material";
import { useState } from "react";
import { formatCurrency } from "@/Functions/FormatCurrency";

const CompletedOrder = ({ orders }) => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState();
  const [review, setReview] = useState();

  const handleReview = (e) => {
    e.preventDefault();
    
  };

  const handleOpen = (id) => {
    setOpen(true);
    setModel(id);
    setReview({ ...review, product: id });
  };

  const orderTable = (item) => (
    <div className="w-full">
      <span className="w-full h-[40px] flex items-center border-b-[2px] border-b-primary/70 pl-[10px] text-primary/70">
        #{item.id}
      </span>
      <div className="flex flex-col">
        {item.products?.map((product) => (
          <div
            key={product.id}
            className="flex h-[100px] items-center pl-[5px] justify-between border-b border-dashed"
          >
            <div className="flex gap-[10px]">
              <img
                src={product.thumbnail}
                alt=""
                className="w-[90px] h-[90px]"
              />
              <div className="h-[90px] flex flex-col justify-between">
                <span className="text-[28px]">{product.name}</span>
                <span>x{product.pivot.quantity}</span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between h-[90px]">
              <div className="h-full flex items-center text-[21px] gap-[10px]">
                {product.price.sales > 0 && (
                  <span className="text-gray-400 line-through">
                    {formatCurrency(product.price.base_price - 0)}
                  </span>
                )}
                <span className="text-red/70">
                  {formatCurrency(
                    product.price.base_price -
                      (product.price.base_price * product.price.sales) / 100
                  )}
                </span>
              </div>
              <Button
                variant="outlined"
                onClick={() => handleOpen(product?.id)}
              >
                Reviews
              </Button>
              <Modal
                open={model === product.id && open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <form
                  onSubmit={handleReview}
                  className="w-[550px] bg-white absolute-center flex-center flex-col rounded-xl px-[30px] py-[50px] gap-[30px]"
                >
                  <div className="flex gap-[10px] items-center w-full">
                    <label htmlFor="" className="text-[21px] w-[100px]">
                      Rating
                    </label>
                    <Rating
                      value={review?.rating}
                      onChange={(e) =>
                        setReview({ ...review, rating: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex gap-[10px] items-start w-full">
                    <label htmlFor="" className="text-[21px] w-[100px]">
                      Comment
                    </label>
                    <textarea
                      className="border h-[200px] flex-1 p-[10px] outline-none"
                      value={review?.comment}
                      onChange={(e) =>
                        setReview({ ...review, comment: e.target.value })
                      }
                    />
                  </div>
                  <Button type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                </form>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <DataTable
        value={orders?.completed}
        tableStyle={{ minWidth: "50rem", marginTop: "-40px" }}
      >
        <Column field="id" body={orderTable}></Column>
      </DataTable>
    </div>
  );
};

export default CompletedOrder;
