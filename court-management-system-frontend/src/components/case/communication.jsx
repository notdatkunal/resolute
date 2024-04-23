import { useState } from "react";
import "../../assets/css/components/communication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Communication() {

  const [descriptionVisible, setDescriptionVisible] = useState(Array(3).fill(false));

  const hideDescriptionToggle = (index) => {
    const updatedVisible = [...descriptionVisible];
    updatedVisible[index] = !updatedVisible[index];
    setDescriptionVisible(updatedVisible);
  };

  const dates = ["12/05/2024", "13/05/2024", "14/05/2024"];

  const descriptions = [
    [
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" },
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" },
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" }
    ],
    [
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" },
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" },
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" }
    ],
    [
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" },
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" },
      { imageUrl: "/src/assets/images/banner-bg-1.png", fileName: "1234343.jpg" }
    ]
  ];

  return (
    <>
      <div>
        {dates.map((date, index) => (
          <div key={index}>
            <div className="product-filters" style={{ backgroundColor: "black", color: "white", marginBottom: "20px" }}>
              <h4 style={{ color: "white", marginTop: "10px" }}>{date}</h4>
              <FontAwesomeIcon
                icon={descriptionVisible[index] ? faPlus : faMinus}
                onClick={() => {
                  hideDescriptionToggle(index);
                }}
                style={{ cursor: "pointer", margin: 0, padding: 0 }}
                className="fas"
              />
              <hr></hr>
            </div>
            <div className={`${descriptionVisible[index] ? "hide" : "show"}`} style={{}}>
              {descriptions[index].map((item, i) => (
                <div key={i}>
                  <img src={item.imageUrl} style={{ width: "150px", height: "150px", marginRight: "20rem" }} />
                  <a>{item.fileName}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
