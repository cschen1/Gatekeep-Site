import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Store() {
  return (
    <div className="store_container">
      <h2>Time Left</h2>
      <Link href="/about"><a>About</a></Link>
      <table>
        <tr>
          <td><Link href="/item" classname="locked_item"><img className="item_icon_image" src = "/clothing/lock.png"/></Link></td>
          <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0421.png"/></Link></td>
          <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0424.png"/></Link></td>
        </tr>
        <tr>
        <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0425.png"/></Link></td>
          <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0426.png"/></Link></td>
          <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0427.png"/></Link></td>
        </tr>
        <tr>
          <td><Link href="/item" classname="locked_item"><img className="item_icon_image" src = "/clothing/IMG_0428.png"/></Link></td>
          <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0429.png"/></Link></td>
          <td><Link href="/item" classname="item_icon"><img className="item_icon_image" src = "/clothing/IMG_0430.png"/></Link></td>
        </tr>
      </table>
    </div>
  )
}
