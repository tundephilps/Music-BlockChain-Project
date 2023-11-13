import Image from "next/image";

const CardMusic = () => {
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-5">
          {/* Repeat the following block for each blog item */}
          <a
            href="#"
            className="flex flex-col gap-2 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-2 font-bold text-black transition hover:shadow-md"
          >
            <Image
              src="/artiste1.jpg"
              alt=""
              width={600}
              height={300}
              className="inline-block h-60 w-full object-cover"
            />
            <div className="w-full pt-1">
              <p className="mb-1 text-xs font-semibold uppercase text-[#636262]">
                lifestyle
              </p>
              <p className="mb-1 text-xl font-semibold">
                The latest news with Flowspark
              </p>
              <p className="mb-1 font-normal text-[#636262] lg:mb-8">
                Your blog post content goes here.
              </p>
            </div>
          </a>
          {/* End of repeated block */}
        </div>
      </div>
    </section>
  );
};

export default CardMusic;
