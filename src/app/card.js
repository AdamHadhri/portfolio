import Image from "next/image"

function Card({photo, title, para}) {
    return (
    <div class="flex-1 w-96 hover:shadow-custom items-center justify-center rounded-xl bg-[#002347] p-7 flex flex-col overflow-hidden hover:-translate-y-2 duration-500">
        <div class="rounded-full w-24 h-24 outline-none outline-4 outline-offset-8 outline-[#FF5003] flex	justify-center items-center cursor-pointer">
          <div class="rounded-full w-24 h-24 bg-[#FF5003] opacity-30 hover:scale-[7] duration-700 z-0 "></div>
          <Image src={photo} class="w-10 h-10 absolute z-10 pointer-events-none"/>
        </div>
        <h2 class="mt-5 text-xl text-center font-bold text-white z-10 select-none	">{title}</h2>
        <p class="mt-1 text-base text-gray-300 text-center z-10 select-none	">{para}</p>
      </div>
)
}
export default Card