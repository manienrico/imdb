import Image from "next/image"

import spinner from './spinner.svg'

export default function loading() {
  return (
    <div className="flex justify-center">
        <Image
            src={spinner}
            alt="loading..."
            width={96}
            height={96}
        />
    </div>
  )
}
