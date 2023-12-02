import { useState } from "react";
import Releases from "./Tabs/Releases";
import Collection from "./Tabs/Collection";
import PlayLists from "./Tabs/PlayLists";
import { TopFans } from "./Tabs/TopFans";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Releases"); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderComponent = (tabName) => {
    // Conditionally render different components based on the active tab
    switch (tabName) {
      case "Releases":
        return <Releases />; // Replace with your Settings component
      case "Collection":
        return <Collection />; // Replace with your Messages component
      case "Playlists":
        return <PlayLists />; // Replace with your Archive component
      case "Top Fans":
        return <TopFans />; // Replace with your Notifications component
      default:
        return null;
    }
  };

  return (
    <div className=" ">
      <div className="block md:block lg:hidden ">
        <select
          id="Tab"
          className="w-full rounded-md border-slate-700 h-12 bg-black text-white"
          onChange={(e) => handleTabClick(e.target.value)}
          value={activeTab}
        >
          <option value="Releases">Releases</option>
          <option value="Collection">Collection</option>
          <option value="Playlists">Playlists</option>
          <option value="Top Fans">Top Fans</option>
        </select>
      </div>

      <div className="hidden  md:hidden lg:block">
        <div className="border-b border-gray-200 flex items-center justify-center">
          <nav
            className="-mb-px flex lg:gap-2 md:gap-1 gap-6 "
            aria-label="Tabs"
          >
            {["Releases", "Collection", "Playlists", "Top Fans"].map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={() => handleTabClick(tab)}
                className={`shrink-0 border-b-2 border-transparent px-1 pb-4 text-xs font-medium ${
                  activeTab === tab
                    ? "text-yellow-600 border-yellow-500"
                    : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
                aria-current={activeTab === tab ? "page" : undefined}
              >
                {tab}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Render the selected tab content */}
      {renderComponent(activeTab)}
    </div>
  );
};

export default Tab;
