import React from 'react';
export default ({portpolioLiks}) => {
    return(
        <section class="page-section bg-light" id="portfolio">
        <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portpolioLiks && portpolioLiks.map(({item,title,img} , index)=>
                        <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={img} alt="" />
                            </a>
                            <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{item}</div>
                    <div className="portfolio-caption-subheading text-muted">{title}</div>
                            </div>
                        </div>
                    </div>
                    )
                    }
                    
                </div>
            </div>
            </section>
    )
}