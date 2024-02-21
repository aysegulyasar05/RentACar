import { useState } from "react";
import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import DetailModal from "./DetailModal";
import { GenerateImage } from "../../utils/GenerateImage";
import {motion} from 'framer-motion'
type CardPropsType = {
  car: CarType;
};

const Card = ({ car }: CardPropsType) => {

    const [isModalOpen,setIsModalOpen]= useState<boolean>(false)

  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make}
        {car.model}{" "}
      </h2>
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">$</span>
        {Math.round(Math.random() * 5000) + 500}
        <span className="text-[14px] font-medium self-end">/day</span>
      </p>
      {/* picture from another API */}
      <div className="relative w-full h-40 my-3">
        <img
          src={GenerateImage(car)}
          className="object-contain w-full h-full"
          alt="img"
        />
      </div>
      {/* bottom  */}

      <div className="relative flex w-full mt-2">
        {/* icons */}
        <div className="group-hover:invisible flex w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/steering-wheel.svg" alt="img" />
            <p className="text-[14px]">
              {car.transmission === "automatic" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/tire.svg" alt="img" />
            <p className="text-[14px]">{car.drive}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/gas.svg" alt="img" />
            <p className="text-[14px]">{car.fuel_type}</p>
          </div>
        </div>
        {/*  buton*/}
        <div className="group-hover:flex w-full hidden absolute">
          <CustomButton
            title="More"
            designs="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      {/* modal */}
      <DetailModal
        car={car}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
