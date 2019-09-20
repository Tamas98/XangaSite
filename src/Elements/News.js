import React from 'react'
import bars from '../assets/XangaBars.png'
import Bsc from '../Containers/bsc'
import Footer from '../Components/Footer'

const News = (props) => {

    let textStyle={
        display: props.mobile ? 'none' : 'block',
        backgroundColor:'rgb(237,246,255)', 
        padding:'3rem 6rem 3rem 3rem',
        height:'700px'
    }

    return[
        <Bsc id="news" class="container">
            <Bsc class="col-sm-7" style={textStyle} >
                <img style={{position:'absolute',top:'0',left:'40px',opacity: '0.03',width:'60%',height:'50%'}}src={bars}/>
                <h4 style={{marginBottom:'5rem',textTransform:'uppercase',color:'rgb(66,69,135)',fontWeight:'bold'}}>News</h4>
                <h5 style={{color:'rgb(66,69,135)',marginBottom: '2rem',fontWeight:'bold'}}>Follow us on Facebook</h5>
                <p style={{fontSize:'0.9rem'}}> 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                </p>
                <p style={{paddingTop:'1rem',fontSize:'1rem'}}><i class='flaticon-facebook' style={{marginRight:'0.6rem',color:'midnightblue'}}></i> https://www.facebook.com/XangaInvestmentDevelopmentGroup</p>
            </Bsc>
            <Bsc class={"col-sm-"+ props.mobile ? 12:4 } style={{textAlign:'center'}}>
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FXangaInvestmentDevelopmentGroup&tabs=timeline&width=340&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="320" 
                height="700" 
                scrolling="no" 
                frameborder="0" 
                allowTransparency="true" 
                allow="encrypted-media">
            </iframe>
            </Bsc>
        </Bsc>,
        <Footer/>
    ]
}

export default News