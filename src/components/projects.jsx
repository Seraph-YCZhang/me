import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://invenst.cse.buffalo.edu/index.php">Invenst Club Website</a></h3>
											<span>
												
												<li>Took charge to achieve a better interaction and user-friendly website.
Redesigned the website from front-end to back-end. Expanded user function
part.</li>
												<li>Re-build dynamic front-end by Javascript, Ajax, Bootstrap and JQuery.
Developed back-end and data storage by PHP and MySQL.</li>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/adsys.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="app.html">ADVERTISEMENT SYSTEM (Ongoing)</a></h3>
											<span>Programming a Java micro-services structured ad system includes ad
serving and ad search modules. Technical stack is SpringCloud, Kafka
along with MySql for data storage.</span>

										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/webcrawler.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Seraph-YCZhang/WeixinCrawler">WECHAT CRAWLER</a></h3>
											<span>
												<li>A Python based web crawler to extract articles data in Wechat
through Sogou API based on urllib, requests and Beautiful Soup.</li>
												<li>Anti anti-crawler by crawling through a 10000 entries proxies pool using
PyQuery, Redis-py, pyquery, aiohttp, Flask.</li>
											</span>

										</div>
									</div>
								</div>
							</div>
							
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
