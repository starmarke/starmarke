import React, {Component} from 'react';
import "./Home.css";
import "./Detail.css";
import Goods from './Goods';


//add detail page ,use goods Component
function detail() {
    // read data from sessionStorage and render
    let data = JSON.parse(window.sessionStorage.getItem("goods"));

  return (
    <div className="home">

        <div id="container">

    <div class="carousel">

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://m.media-amazon.com/images/I/71OXCC4xYmL._SX3000_.jpg" class="d-block w-100"  alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/61PbR8v+C4L._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className='home_container'>
    <div className="home_rowz">
    <div className="home_row">
        <Goods
            id={data.id}
            title={data.title}
            price={data.price}
            image={data.image}
            rating={data.rating}
            descr={data.descr}
            />
    </div>
    </div>
    <div className="home_rowz_comment">
        <div className="review_item">
            <div className="review_left">
                <div>12/24/2015</div>
                <div><p>⭐⭐⭐</p></div>
            </div>
            <div className="review-right">
                <div><b>wfpbx</b></div>
                <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
            </div>
        </div>
        <div className="review_item">
            <div className="review_left">
                <div>12/24/2015</div>
                <div><p>⭐⭐⭐</p></div>
            </div>
            <div className="review-right">
                <div><b>wfpbx</b></div>
                <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
            </div>
        </div>
    </div>
    </div>
        <div class="foot-sign-in">
        <div id="container">

            <div call-to-action></div>
            <div class="sign-in-title">
                <div>
                See personalized recommendations
            </div>
            <button class=" button button1" width="50px"><strong>Sign in</strong></button>

            <div>
                New customer? Start here.
            </div>
        </div>
        </div>
        </div>




</div>
    </div>
  )
}

export default detail