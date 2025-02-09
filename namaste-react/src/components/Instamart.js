import { useState } from "react";

const Section = ({ title, description, isVisible, setVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h5 className="font-bold text-xl">{title}</h5>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <h1 className="font-bold text-2xl underline">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "The shimmering waves crashed against the rocky shore, their rhythmic dance echoing the whispers of the ancient winds. Beneath the surface, a school of silver fish darted through the coral maze, their scales glinting like scattered coins in the sun's fading light. Somewhere in the distance, a lone seagull cried out, its voice carrying the secrets of the horizon. Time seemed to stand still, as if the ocean itself held its breath, waiting for the next chapter of its eternal story."
        }
        isVisible={visibleSection === "about"}
        setVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "The shimmering waves crashed against the rocky shore, their rhythmic dance echoing the whispers of the ancient winds. Beneath the surface, a school of silver fish darted through the coral maze, their scales glinting like scattered coins in the sun's fading light. Somewhere in the distance, a lone seagull cried out, its voice carrying the secrets of the horizon. Time seemed to stand still, as if the ocean itself held its breath, waiting for the next chapter of its eternal story."
        }
        isVisible={visibleSection === "team"}
        setVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Careers"}
        description={
          "The shimmering waves crashed against the rocky shore, their rhythmic dance echoing the whispers of the ancient winds. Beneath the surface, a school of silver fish darted through the coral maze, their scales glinting like scattered coins in the sun's fading light. Somewhere in the distance, a lone seagull cried out, its voice carrying the secrets of the horizon. Time seemed to stand still, as if the ocean itself held its breath, waiting for the next chapter of its eternal story."
        }
        isVisible={visibleSection === "career"}
        setVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
