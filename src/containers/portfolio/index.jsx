import React from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import PageHeaderContent from '../../components/pageHeaderContent';
import { useState } from "react";

import ImageOne from "../../images/img01.jpg";
import ImageTwo from "../../images/img02.jpg";
import ImageThree from "../../images/img03.jpg";
import ImageFour from "../../images/img04.jpg";
import ImageFive from "../../images/img05.JPG";
import ImageSix from "../../images/img06.jpg";
import ImageSeven from "../../images/img07.jpg";
import ImageEight from "../../images/img08.jpg";

import "./styles.scss";

const portfolioData = [
    {
        id: 2,
        name: "Marine Clinic Yangon Website",
        image: ImageOne,
        link: "https://marineclinicygn.com/",
    },
    {
        id: 3,
        name: "Ma Har Bote Calculator with C++",
        link: "https://throlinepipi.github.io/MaharBote-Calculator",
        image: ImageSix,
    },
    {
        id: 2,
        name: "CMK Clinic & Diagnostic Center",
        image: ImageTwo,
        link: "http://cmkmedicalcentre.com/",
    },
    {
        id: 2,
        name: "Kyi Driving School",
        image: ImageThree,
        link: "https://kyi-driving-instructor.000webhostapp.com/",
    },
    {
        id: 3,
        name: "Deadline Calculator with JavaScript",
        image: ImageFive,
        link: "https://throlinepipi.github.io/deadlineCalculator",
    },
    {
        id: 2,
        name: "Portfolio",
        image: ImageFour,
        link: "https://mayhsumyatportfolio.000webhostapp.com/",
    },
    {
        id: 3,
        name: "Lottery Game with C++",
        image: ImageSeven,
        link: "https://throlinepipi.github.io/Lottery-Game",
    },
    {
        id: 3,
        name: "Electricity Bill Calculator with PHP",
        image: ImageEight,
        link: "https://github.com/throlinepipi/Electricitybill-Calculator",
    },

];

const filterData = [
    {
        filterId: 1,
        label: "All",
    },
    {
        filterId: 2,
        label: "Developement",
    },
    {
        filterId: 3,
        label: "Programs",
    },
];

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    function handleVisit(link) {
        if (link) {
          // Open the project link in a new tab
          window.open(link, '_blank');
          // Alternatively, you can navigate to the link in the current tab
          // window.location.href = link;
        }
      }

    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");

    const filteredItems =
        filteredvalue === 1
            ? portfolioData
            : portfolioData.filter((item) => item.id === filteredvalue);

    console.log(filteredItems);

    return (
        <section id="portfolio" className="portfolio">

            <PageHeaderContent headerText="My Portfolio" icon={<AiOutlineAppstoreAdd size={40} />} />

            <div className="portfolio_content">

                <ul className="portfolio_content_filter">
                    {filterData.map((item) => (
                        <li
                            className={item.filterId === filteredvalue ? "active" : ""}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="portfolio_content_cards">
                    {filteredItems.map((item, index) => (

                        <div
                            className="portfolio_content_cards_item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >

                            <div className="portfolio_content_cards_item_img-wrapper">
                                <a>
                                    <img alt="dummy data" src={item.image} />
                                </a>
                            </div>

                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <button onClick={() => handleVisit(item.link)}>Show Project</button>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;