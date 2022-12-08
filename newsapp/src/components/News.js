import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    // "articles" = [
    //     {
    //         "source": {
    //         "id": null,
    //         "name": "Android Central"
    //         },
    //         "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
    //         "title": "Google Pixel 7 Pro vs. Apple iPhone 14 Pro: Which flagship should you buy?",
    //         "description": "With the Pixel 7 Pro, Google has delivered its best phone to date. With outstanding cameras and a refined design, it ticks all the right boxes. But does it have what it takes to hold its own against the might of the iPhone 14 Pro?",
    //         "url": "https://www.androidcentral.com/phones/google-pixel-7-pro-vs-apple-iphone-14-pro",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/NqTPAsdSmdUqJZbzPEJBdf-1200-80.jpg",
    //         "publishedAt": "2022-11-26T01:39:20Z",
    //         "content": "Google has steadily refined its hardware efforts over the last three years, and the result is that the Pixel 7 Pro ticks all the right boxes for a high-end phone. It has a gorgeous design, all the ex… [+15972 chars]"
    //         },
    //     {
    //         "source": {
    //         "id": null,
    //         "name": "CNET"
    //         },
    //         "author": "Adrian Marlow",
    //         "title": "This 9th Gen iPad Is One of the Best Black Friday Deals Out There - CNET",
    //         "description": "Black Friday has brought the 64GB iPad close to the lowest price it's ever been.",
    //         "url": "https://www.cnet.com/deals/this-9th-gen-ipad-is-one-of-the-best-black-friday-deals-out-there/",
    //         "urlToImage": "https://www.cnet.com/a/img/resize/679e0345321d7a156c7a699d169fd499f50fefb3/hub/2022/11/21/2f11d2b5-0920-4892-b5e8-1037e0e36c2d/ipad-2021-10-2-inch.jpg?auto=webp&fit=crop&height=630&width=1200",
    //         "publishedAt": "2022-11-26T02:06:00Z",
    //         "content": "This story is part of Gift Guide, our year-round collection of the best gift ideas. \r\nBlack Friday sales are rolling full steam ahead, with one of the best iPad deals we've ever seen. Right now, you … [+2933 chars]"
    //         },
    //     {
    //         "source": {
    //         "id": "business-insider",
    //         "name": "Business Insider"
    //         },
    //         "author": "ssaril@insider.com (Sarah Saril)",
    //         "title": "Last chance to save on Apple Watch Black Friday deals — including the Apple Watch Ultra, on sale for the first time ever",
    //         "description": "Black Friday is the best time to buy an Apple Watch. We're seeing deals on the entire Apple Watch lineup, including the Series 8, SE, and Ultra.",
    //         "url": "https://www.businessinsider.com/guides/deals/apple-watch-black-friday-deals-2022-11",
    //         "urlToImage": "https://i.insider.com/63818e48b4cf0100187d9683?width=1200&format=jpeg",
    //         "publishedAt": "2022-11-26T04:55:19Z",
    //         "content": "When you buy through our links, Insider may earn an affiliate commission. Learn more.\r\nBlack Friday is down to its last few hours so now is the time to save on pricey products from Apple, including t… [+2521 chars]"
    //         },
    //     {
    //         "source": {
    //         "id": "business-insider",
    //         "name": "Business Insider"
    //         },
    //         "author": "mrenbarger@insider.com (Madeline Renbarger)",
    //         "title": "Apple iPhones in short supply on Black Friday as China's COVID-19 lockdown disrupts manufacturing, report says",
    //         "description": "Analyst Dan Ives warned iPhone 14 Pro shortages have gotten much worse over the last week with very low inventories on Friday.",
    //         "url": "https://www.businessinsider.com/apple-iphones-short-supply-black-friday-china-covid-lockdown-2022-11",
    //         "urlToImage": "https://i.insider.com/6381462e785afd00189bca83?width=1200&format=jpeg",
    //         "publishedAt": "2022-11-26T00:31:49Z",
    //         "content": "If you're looking for deals this Black Friday on the latest iPhone models, you may be out of luck. \r\nShoppers across the country are reporting shortages of iPhone 14 products, including the iPhone 14… [+1172 chars]"
    //         },
    //         ]

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
      super(props)
        // console.log("Hello I am a Constructor form News components")
      this.state = {
         articles: [],
         loading: false,
         page: 1
      }
    //   document.title= this.props.category;
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData)
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})        
    }

    // // // Mounting, Update, Unmount
    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
        this.updateNews()
    }

     handlePrevClick = async () =>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData)
        //   // this.setState({articles: parsedData.articles})
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page - 1})
        this.updateNews()
    }

     handleNextClick = async () =>{
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading: true})
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     console.log(parsedData)
        //       // this.setState({articles: parsedData.articles})
    
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({page: this.state.page + 1})
        this.updateNews()
    }
    
  render() {
    return (
      <div className='container my-3'>
        <h1 id='divTAReviews' className=' text-center text-danger underline' style={{ margin: "35px 0px", marginTop: '90px'}}>NewsMonkey - Top Headlines {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                    author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
