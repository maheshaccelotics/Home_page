import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div class="bg-container">
        <div class="image-container">
            

            <div class="text-container justify-content-center">
                <p class="product-title">PRODUCT ENGINEERING</p>
                <h1 class="enterprise-title">ENTERPRISE SOFTWARE<br />DEVELOPMENT</h1>
                <p class="para-content">Need a solid software foundation for your business? Uncoordinated mobile apps<br />
                    and software stress out your employees and impede your productivity? Leverage<br/>
                    our decade-long expertise in enterprise software development, API integration,
                    <br/> modernizing legacy systems, and consolidating app portfolios.
                </p>
            </div>

        </div>
        <div class="solutions-container">
            <h1 class="our-ent-heading">OUR ENTERPRISE <br/> SOFTWARE SOLUTIONS</h1>
            <p class="software-para">Your business needs a reliable enterprise software solution to support your many <br/> operations. It needs to scale, coordinate other software and mobile apps, <br/> incorporate advanced tech, and cover an extensive list of other objectives. <br/>
                Intellectsoft has the experience, tools, and technologies to create such demanding <br/> custom software.</p>
        </div>
        <div class="hover-container">
            <div class="hover-bg-container d-flex flex-column justify-content-center">
                <p>CUSTOM ENTERPRISE SOFTWARE DEVELOPMENT</p>
            </div>
            <div class="hover-bg-container1 d-flex flex-column justify-content-center">
                <p>SOFTWARE INTEGRATION</p>
            </div>
            <div class="hover-bg-container2 d-flex flex-column justify-content-center">
                <p>LEGACY APPLICATION MODERNIZATION</p>
            </div>
            <div class="hover-bg-container3 d-flex flex-column justify-content-center">
                <p>APPLICATION PORTFOLIO CONSOLIDATION</p>
            </div>
        </div>
        <div class="latest-tech-container">
            <h1 class="latest-heading">THE LATEST TECH</h1>
            <p class="latest-tech-para">Intellectsoft always keeps track of new technologies to deliver advanced enterprise <br /> software solutions. The latest tech give you many crucial benefits, from the highest <br /> level of security with blockchain - to reliable automation with Artificial Intelligence <br /> based algorithms like machine learning.</p>
        </div>


        <div class="latest-tech-container">
            <h1 class="latest-heading">CAPABILITIES OF OUR ENTERPRISE <br/> SOFTWARE DEVELOPERS</h1>
            <p class="latest-tech-para">Our enterprise software developers have the knowledge, niche skills, and <br /> experience to build you a solid software solution.</p>
        </div>

        <hr class="w-100" />

        
    

    </div>
  )
}

export default Product