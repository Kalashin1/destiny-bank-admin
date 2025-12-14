import { useCurrencyFormatter } from "../../../useFormatter";
import type { FC } from "react";

const DashboardCard: FC<{balance: number}> = ({
  balance
}) => {
  const formatter = useCurrencyFormatter()
  return (
    <div id="cards-carousel" className={`h-40 sm:w-64 lg:w-60 xl:w-88 w-80 cursor-pointer`}>
      <div className="w-full">
        <div
          className="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-linear-to-br bg-purple-500 w-full from-purple-500 to-indigo-600 p-5 swiper-slide-visible swiper-slide-active"
          role="group"
          aria-label="1 / 3"
          style={{
            zIndex: 3,
            transform: "translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1)",
            transitionDuration: "0ms",
          }}
        >
          <div className="grow">
            <img
              className="h-3"
              src="/images/payments/cc-visa-white.svg"
              alt="image"
            />
          </div>
          <div className="text-white">
            <p className="text-lg font-semibold tracking-wide">{formatter.format(balance)}</p>
            <p className="text-xs font-medium mt-8">**** **** **** 8945</p>
          </div>
          <div className="absolute right-0 top-0 -m-3 h-24 w-24 rounded-full bg-white/20"></div>
          <div
            className="swiper-slide-shadow swiper-slide-shadow-cards"
            style={{ opacity: 0, transitionDuration: "0ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
