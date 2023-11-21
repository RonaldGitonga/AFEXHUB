import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Recent() {

    const Data = [

        {img : "assets/img/gallery/protfolio-img01.jpg", category : "Financial"},
    
        {img : "assets/img/gallery/protfolio-img02.jpg", category : "Financial"},

        {img : "assets/img/gallery/protfolio-img02.jpg", category : "Analyzing"},
    
        {img : "assets/img/gallery/protfolio-img03.jpg", category : "Insurance"},
    
        {img : "assets/img/gallery/protfolio-img04.jpg", category : "Family"},

        {img : "assets/img/gallery/protfolio-img05.jpg", category : "Business"},

        {img : "assets/img/gallery/protfolio-img06.jpg", category : "Financial"},

        {img : "assets/img/gallery/protfolio-img06.jpg", category : "Marketing"},

        {img : "assets/img/gallery/protfolio-img02.jpg", category : "Marketing"},

      ]


    const [current, setcurrent] = useState(Data);

      const Filter = (category) =>{
          const arr = [];
          if(category === "View All"){
          setcurrent(Data)
          }
          else{
          Data.map((item)=> {
              if(item.category === category){
              arr.push(item);
              }
          })
          setcurrent(arr);
          }
      };
  return (
    <>
        <section id="portfolio" className="pt-120 pb-90">
            <div className="container">
                <div className="portfolio ">
                <div className="row align-items-end mb-50">
                    <div className="col-lg-6">
                    <div className="section-title wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <h5>
                        <i className="fal fa-graduation-cap" /> Our Recent Projects
                        </h5>
                        <h2>Last Year We Have Completed Gallery School</h2>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="my-masonry text-right wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                        <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={()=> Filter("View All")} > View All </button>
                        <button data-filter=".financial" onClick={()=> Filter("Financial")} >Financial</button>
                        <button data-filter=".banking" onClick={()=> Filter("Analyzing")} >Analyzing</button>
                        <button data-filter=".insurance" onClick={()=> Filter("Marketing")} >Marketing </button>
                        <button data-filter=".family" onClick={()=> Filter("Business")} >Business</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid col3  row wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s" >

                    {current.map( (item , index)=> ( 
                        <div className="grid-item financial col-4" key={index}>
                            <Link to="/single-projects">
                                <figure className="gallery-image">
                                    <img src={item.img} alt="img" className="img" />
                                </figure>
                            </Link>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Recent