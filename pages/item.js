import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

export default function Item() {
  return (
    <div className="store_container">
      <h1 className="title">Green Jeans by Basic Editions</h1>
      <table>
        <tr>
            <td><Link href="/item"><img className="green_jeans" src = "/clothing/IMG_0421.png"/></Link></td>
        </tr>
        <tr>
        <div>
                <h1 className="title_top">$75</h1>
                <p>size - 34w</p>
                <p>buy now - 150 points</p>
                <p>buy 2/13/22 - 100 points</p>
                <p className="title">buy 2/16/22 - 50 points</p>
              </div>
          </tr>
      </table>

            
      <h1>BUY</h1>
      <div className="title_top"></div>
      <Link href="/store"><h1 className="back_button">BACK</h1></Link>
    </div>
  )
}
