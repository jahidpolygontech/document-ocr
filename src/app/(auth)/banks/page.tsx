import Image from "next/image";
import Link from "next/link";

const staticBanks = [
  { id: 23, name: "Dhaka Bank", image: "/bankImage3.webp" },
  { id: 22, name: "MTB Bank", image: "/bankImage1.png" },
  { id: 24, name: "Brac Bank", image: "/bankImage2.jpg" },
];

const Page = () => {
  return (
    <section className="flex flex-col w-full mt-6 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staticBanks.map(({ id, name, image }) => (
          <Link
            key={id}
            href={`/banks/${id}`}
            className="cursor-pointer border rounded-xl p-6 text-center hover:shadow-md transition flex flex-col items-center"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <Image
                src={image}
                alt={name}
                width={120}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
