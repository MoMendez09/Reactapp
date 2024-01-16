import React from "react";

function BioGroup() {
  let items = [
    "Hardworking",
    "Dependable",
    "Honest",
    "Willing to Learn",
    "Team Player",
  ];

  return (
    <>
      <h1>Traits Of Marcus</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="bio-group">
        {items.map((item) => (
          <li
            className="bio-group-item"
            key={item}
            onClick={(event) => console.log("item")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BioGroup;
