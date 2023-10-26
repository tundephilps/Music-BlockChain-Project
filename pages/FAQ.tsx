import { useState } from "react";

const accordionData = [
  {
    title: "How this Bema is different from others in the market?",
    content:
      "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
  },
  // Add more data items as needed
  {
    title: "Is Bema is going to change the way music goes?",
    content:
      "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
  },
];

function FAQ() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">Frequently Asked</h2>
          <p className="mx-auto mt-4 max-w-lg text-[#647084]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="mb-6 w-2/3 border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8"
            >
              <div
                className="flex cursor-pointer justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-xl font-bold">{item.title}</p>
                <div
                  className={`relative ml-10 mt-1 flex h-5 w-5 items-center justify-center ${
                    openAccordionIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <div
                    className={`absolute h-5 w-0.5 bg-[#276ef1] transition-transform ${
                      openAccordionIndex === index ? "transform rotate-90" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-0.5 w-5 bg-[#276ef1] ${
                      openAccordionIndex === index ? "hidden" : ""
                    }`}
                  ></div>
                </div>
              </div>
              {openAccordionIndex === index && (
                <p className="mb-4">{item.content}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-center">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <a href="#">customer support team</a>.
        </p>
      </div>
    </section>
  );
}

export default FAQ;
