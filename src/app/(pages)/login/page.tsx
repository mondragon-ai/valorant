// import Image from "next/image";
import MobileLogin from "@/app/components/pages/enter/Mobile";

export default function Login() {
  return <>{true ? <MobileLogin /> : null}</>;
}
