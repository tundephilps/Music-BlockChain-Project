// Import the necessary styles or CSS modules in your Next.js component
import Image from "next/image";
import styles from "./YourComponent.module.css"; // Replace 'YourComponent' with your component's name

const YourComponent = () => {
  return (
    <>
      <html lang="en">
        <body
          className={`h-screen ${styles.bgColor} flex items-center justify-center`}
        >
          <div
            className={`bg-white text-gray-700 w-80 min-h-[10rem] rounded-md shadow-lg overflow-hidden ${styles.productContainer}`}
          >
            <Image
              src="https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/master/w_2240,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg"
              alt="product"
              className="w-full h-full object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                  stock ready
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                  official store
                </span>
              </div>

              <h2
                className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap"
                title="Best Headphone Ever"
              >
                Best Headphone Ever
              </h2>

              <div>
                <span className="text-xl font-bold">€ 159.99</span>
                <div className="flex items-center mt-1 gap-2">
                  <span className="text-sm line-through opacity-50">
                    € 199.99
                  </span>
                  <span className="bg-green-400 px-2 py-0.5 rounded-md text-xs text-white">
                    Save %20
                  </span>
                </div>
              </div>

              <span className="flex items-center mt-1">
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star"></span>
                <span className="text-xs ml-2 text-gray-500">20k reviews</span>
              </span>

              <div className="mt-5 flex gap-2">
                <button className="bg-yellow-500 px-6 py-2 text-white rounded-md hover:bg-yellow-400 font-medium tracking-wider">
                  Add to Cart
                </button>
                <button className="fa fa-solid fa-heart flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400"></button>
                <button className="fa fa-solid fa-eye flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400"></button>
              </div>
            </div>
          </div>
        </body>
      </html>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;700&display=swap");
        /* Additional global styles go here */
      `}</style>
    </>
  );
};

export default YourComponent;
