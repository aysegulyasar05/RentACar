import { CarType } from "../../types";
import { GenerateImage } from "../../utils/GenerateImage";
import {AnimatePresence, motion} from 'framer-motion'

const DetailModal = ({car,isOpen,close}:ModalPropsType) => {
  
    return (
      //if modal open show modal
      <AnimatePresence>
       { isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center p-4 ">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{scale:0, opacity:0}}
            className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            {/* close button */}
            <button
            title="btn"
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="" />
            </button>
            {/* photo area */}
            <div className="flex flex-1 flex-col gap-3">
              {/* big photo */}
              <div className="w-full h-40 bg-pattern bg-center bg-cover rounded-lg">
                <img
                  className="h-full mx-auto object-contain"
                  src={GenerateImage(car)}
                  alt=""
                />
              </div>
              {/* small photos */}
              <div className="flex gap-3">
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain"
                    src={GenerateImage(car, "29")}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain"
                    src={GenerateImage(car, "33")}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    className="h-full mx-auto object-contain"
                    src={GenerateImage(car, "13")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* vehicles info */}
            {/* change object to array and use key and value  */}
            <div>
              {Object.entries(car)
                .filter(([key]) => key !== "year") // remove year value
                .map(([key, value]) => (
                  <div className="flex justify-between ">
                    <h4 className="capitalize text-gray">
                      {key.replace("_", " ")}
                    </h4>
                    <p className="text-black-100 font-semibold capitalize">
                      {value}
                    </p>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
        )}
      </AnimatePresence>
    );
}

export default DetailModal

type ModalPropsType = {
    car:CarType;
    isOpen: boolean;
    close: ()=> void;
}