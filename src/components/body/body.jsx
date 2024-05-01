import './body.css'
import logoImg  from './../../img/bitcoin_logo.svg'
import Google from '././../../img/IconSign/Google.svg'
import Apple from '././../../img/IconSign/Apple.svg'




import NFT_1 from '././../../img/Monkey_1.svg'
import NFT_2 from '././../../img/Monkey_2.svg'
import NFT_3 from '././../../img/Monkey_3.svg'
import NFT_4 from '././../../img/Monkey_4.svg'
import NFT_5 from '././../../img/Monkey_5.svg'
import NFT_6 from '././../../img/Monkey_6.svg'
const body = () => {
    return (<section className="body">
        <div className="container">
            <div className="promo_content">

                
                <div className="body_text">
                    NEXT LEVEL
                    TO EXCHANGE
                    YOUR CRYPTO
                    ASSETS
                </div>

               


                <div className="body_text_low">
                Sign up to get $5,020 in Bonuses and Mystery Boxes
                </div>

  

                
                <div className="bitcoin_logo">
                    <img src={logoImg} alt="Logo"/>
                

                <button className="body_button_sign">
                 <div>SIGN UP NOW!</div>
                
                </button>
                
               

               <button className="Google_login"> 
               <img src={Google} className="Google_logo" />
                </button>
                
               <button className="Apple_login">
               <img src={Apple} className="Google_logo" />
               </button>
               <div className="body_text_loww">OR USE</div>
               
               <div className="Sell_buy">SELL AND BUY</div>
               <div className="Sell_buy_low">SELL AND BUY MOREE 1000+ CRYPTO TOKENS</div>

               <div className="NFT">
                <img src={NFT_1}/></div>
               <div className="Top_NFT">TOP NFT PROJECT</div>
               <div className="Top_NFT_low">In you buy/sell you NFT get new project to NFT Market</div>
               
               <div className="NFT_2">
                <img src={NFT_2}/></div>
               <div className="Jacken_Party_one">Jacken Party</div>
               <div className="Jacken_Party_one_low">Backet</div>
               <div className="Jacken_Party_Update">Updated: 11 Dec at 2:44 PM</div>

               <div className="NFT_3">
                <img src={NFT_3}/></div>
               <div className="Jacken_Party_two">Jacken Party</div>
               <div className="Jacken_Party_two_low">Backet</div>
               <div className="Jacken_Party_Update">Updated: 11 Dec at 2:44 PM</div>

               <div className="NFT_4">
                <img src={NFT_4}/></div>
               <div className="Jacken_Party_two">Jacken Party</div>
               <div className="Jacken_Party_two_low">Backet</div>
               <div className="Jacken_Party_Update">Updated: 11 Dec at 2:44 PM</div>

               <div className="NFT_5">
                <img src={NFT_5}/></div>
               <div className="Jacken_Party_three">Jacken Party</div>
               <div className="Jacken_Party_three_low">Backet</div>
               <div className="Jacken_Party_Update">Updated: 11 Dec at 2:44 PM</div>

               <div className="NFT_6">
                <img src={NFT_6}/></div>
               <div className="Jacken_Party_four">Jacken Party</div>
               <div className="Jacken_Party_four_low">Backet</div>
               <div className="Jacken_Party_Update">Updated: 11 Dec at 2:44 PM</div>

               <div className="market_place">Marketplace availability </div>
               <div className="market_place_low">
                We integrate a privacy-first approach in all our products and services.
We are transparent about the data we gather from you, clearly stating how we utilize and share it.</div>



               <div className="SELL_BUY">SELL AND BUY MOREE 1000+ CRYPTO ASSET</div>
               <div className="EXXBTC">EXXBTC</div>
                </div>
            </div>
        </div>
    </section>);
}
 
export default body;