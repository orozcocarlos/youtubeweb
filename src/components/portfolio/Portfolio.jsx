import React from "react";
import "./portofolio.scss"
import { Book , Update } from "@material-ui/icons";
import PortfolioList from "../portfoliolist/PortfolioList";
import {
  GitHub,
  InsertLink,
} from "@material-ui/icons";
import { useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  reactPortfolio
} from "../../data";
import { useEffect } from "react";

function Portfolio() {


  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])


  const list = [  
    {
      id: "web",
      title: "Web App",
    },
   
    {
      id: "design",
      title: "Python",
    },
    {
      id: "content",
      title: "Matlab",
    },
    {
      id: "react",
      title: "React",
    },
  ];


  useEffect(() => {
    switch (selected) {   
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);
  return (
    <div className="projects">
     

      <section className="portfolio">
        <h1 className="heading">
          {" "}
          <span>my</span> work{" "}
        </h1>
        <ul>         
          {list.map(item=>(
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          ))}
        </ul>

       
        

        <div className="box-container">
        {
          data.map(d=>(

            <div className="box">
            <img loading="lazy" src={d.img} alt="" />
            <div className="content">
              <h3>{d.title}</h3>
              <p>
                {d.description}
              </p>
              <div className="links">
              <a href={d.link} target="_blank"> <GitHub className="fas"/></a>
              <a href={d.site} target="_blank"> <InsertLink className="fas"/></a>
              </div>
           
            </div>
          </div>

          ))
        }

          {/* <div className="box">
            <img loading="lazy" src="assets/images/img-2.jpg" alt="" />
            <div className="content">
              <h3>project 02</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-3.jpg" alt="" />
            <div className="content">
              <h3>project 03</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-4.jpg" alt="" />
            <div className="content">
              <h3>project 04</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-5.jpg" alt="" />
            <div className="content">
              <h3>project 05</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-6.jpg" alt="" />
            <div className="content">
              <h3>project 06</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div> */}
        </div>

      
      </section>
    </div>
  );
}

export default Portfolio;
