import { ReactNode } from "react";

type CardsProps = {
  children?: ReactNode;
};
export default function Cards({ children }: CardsProps) {
  return <div className="relative w-[350px] h-[200px]">{children}</div>;
}
