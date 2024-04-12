import { useState } from "react";
import cardLogo from "../assets/images/card-logo.svg";
interface FrontCardProps {
  cardNumber: number;
  cardName: string;
  cardMonth: number;
  cardYear: number;
}
export default function FrontCard(props: FrontCardProps) {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("FELICIA LEIRE");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");

  return (
    <div className="absolute bg-cover bg-no-repeat bg-center bg-card-front rounded-lg p-5 w-full h-full -top-20 left-20">
      <div className="flex flex-col text-neutral-white tracking-widest">
        <img className="mb-10" src={cardLogo} width={75} alt="card-logo" />
        <span className="text-xl sm:text-2xl mb-2">{cardNumber}</span>
        <div className="flex font-thin text-xs justify-between">
          <span>{cardName.toUpperCase()}</span>
          <span className="items-end">
            <span>{cardMonth}</span>/<span>{cardYear}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
