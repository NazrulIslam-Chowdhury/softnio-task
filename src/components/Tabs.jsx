import { useState } from "react";
import { tabContents, tabs } from "../../constants";
import { phone } from "../assets";

const Tabs = () => {
  const [showTab, setShowTab] = useState("About");
  console.log(showTab);
  return (
    <main>
      <ul className="flex">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`${
              tab === showTab ? "bg-[#BD1F17] text-white" : ""
            } hover:bg-[#BD1F17] hover:text-white text-lg font-medium  transition-all px-5 py-2 cursor-pointer`}
            onClick={() => setShowTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="h-[1px] bg-[#BD1F17]"></div>

      <section className="mt-5">
        {tabContents.map((tabContent) => (
          <div key={tabContent.id}>
            {tabContent.tab === showTab && (
              <div className="space-y-5">
                <h1 className="text-[40px] lg:text-[58px] leading-[48px] lg:leading-[62px] font-bebasNeue">
                  {tabContent.title}
                </h1>
                <p className="text-[16px] leading-[26px]">
                  {tabContent.description}
                </p>
                <div className="flex items-center gap-8">
                  <button className=" font-semibold uppercase text-black bg-[#febf00] px-5 py-2 lg:text-base text-sm">
                    About {tabContent.tab}
                  </button>
                  <div className="flex items-center gap-2">
                    <img src={phone} alt="phone icon" />
                    <p className="lg:text-base text-sm">+88 3426 739 485</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Tabs;
