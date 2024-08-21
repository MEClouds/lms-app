import Image from "next/image"

type Props = {}
export const Logo = ({}: Props) => {
  return <Image width={130} height={130} alt="logo" src={"/logo.svg"} />
}
