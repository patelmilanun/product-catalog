import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const bgColors = [
  'bg-slate-500',
  'bg-red-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-green-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-sky-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-purple-500',
  'bg-fuchsia-500',
  'bg-pink-500',
  'bg-rose-500',
];

export default async function Home() {
  const productsResponse = await fetch(
    'https://fake-store-api.okdo.workers.dev/products/'
  );
  const products: Product[] = await productsResponse.json();

  return (
    <main>
      <div className="flex flex-wrap items-center justify-center p-1">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg ${
              bgColors[Math.floor(Math.random() * 10)]
            } shadow-lg duration-500 hover:scale-105 hover:shadow-xl`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48 opacity-20"
                style={{
                  background: 'radial-gradient(black, transparent 60%)',
                  transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                }}
              ></div>
              <div className="relative h-44 w-44">
                <Image
                  className="object-contain"
                  fill
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
            <div className="relative mt-6 px-6 pb-6 text-white">
              <span className="-mb-1 block opacity-75">{product.category}</span>
              <div className="flex justify-between">
                <span className="block w-44 truncate text-xl font-semibold">
                  {product.title}
                </span>
                <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-orange-500">
                  ${product.price}
                </span>
              </div>
              <span className="mt-2 line-clamp-2 w-64 opacity-60">
                {product.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
