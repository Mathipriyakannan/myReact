import React from "react";
import './shop.css';

function Shop() {
    return(
<div>
    <header className="navbar d-flex" style={{backgroundColor:"black"}}>
        <p style={{marginLeft:"200px"}}>FREE SHOPPING ON ALL US ORDERS OVER $50</p>
        <p className="me-5 ms-5" style={{marginLeft:"500px"}}>USD<i class="bi bi-chevron-down me-3 p-2"style={{fontSize:"x-small"}}></i>English
        <i class="bi bi-chevron-down me-3 p-2 " style={{fontSize:"x-small"}}></i>My Account<i class="bi bi-chevron-down me-3 p-2"style={{fontSize:"x-small"}}></i></p>
    </header>
    <div className="navbar navbar-expand-lg" style={{fontSize:"blod"}}>
    <div className="container-fluid d-flex" style={{justifyContent:"space-between"}}>
        <ul className=" navbar-nav">
            <li class="nav-item"> <a href="#" class="nav-link text-block" style={{marginLeft:"200px",fontSize:"25px"}}>COLO<span className="color">SHOP</span></a></li>
            <li class="nav-item"><a href="" class="nav-link text-block " style={{marginLeft:"400px"}} > Home</a> </li>
            <li class="nav-item"><a href="" class="nav-link text-block ms-4" > Shop</a> </li>
            <li class="nav-item"><a href="" class="nav-link text-block ms-4" > Promotion</a> </li>
            <li class="nav-item"><a href="" class="nav-link text-block ms-4" > Pages</a> </li>
            <li class="nav-item"><a href="" class="nav-link text-block ms-4" > Blog</a> </li>
               <li class="nav-item"><a href="" class="nav-link text-block ms-4" > Contact</a> </li>
 </ul>
 <div class="d-flex ">
 <p class="mt-2 float-end" ><i class="bi bi-search text-dark ms-5 p-2 " ></i><i class="bi bi-person-fill text-dark ms-2 p-2"></i>
 <button class="btn btn-light position-relative">
 <i class="bi bi-cart-fill text-dark rounded rounded-5 p-2 bg-secondary"></i>
 <span class="position-absoluite top-10 start-10 translate-middle bg-danger badge  border border-light rounded-circle">4</span> </button></p></div>
</div>
 </div>
      <div className="ms-5 p-5 mt-5">
        <p >SPRING/SUMMER COLLECTION 2017</p>
        <h1 style={{fontSize:"50px"}}>Get up to 30% off</h1>
        <h1 style={{fontSize:"50px"}}>New Arrivals</h1>
        <button className="button p-3">SHOP NOW</button>
 </div>
   <div className="container mt-5 me-5 p-4" style={{position:"relative"}}>
    <img src="../images/img3.jpg"  alt="#" style={{height:"200px",width:"300px",marginTop:"90px",marginLeft:"40px",marginBottom:"50px" }}></img>
 <button class="border border-1 px-4" style={{position:"absolute",margin:"170px -210px",fontWeight:"bold"}}>WOMEN'S</button>
   <img src="../images/img4.jfif" alt="#" style={{height:"200px",width:"300px", marginTop:"90px",marginLeft:"70px",marginBottom:"50px" }}></img>
   <button class="border border-1 px-4" style={{position:"absolute",margin:"180px -230px",fontWeight:"bold"}}>ACCESSORIES'S</button>
   <img src='../images/img8.jfif' alt="" style={{height:"200px",width:"300px",marginTop:"90px",marginLeft:"40px",marginBottom:"50px" }}></img> 
 
 <button class="border border-1 px-4" style={{position:"absolute",margin:"180px -230px",fontWeight:"bold"}}>MEN'S</button>
   </div>
    
</div>
   


    )
}
export default Shop;