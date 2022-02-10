import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

export default function Locked() {
  return (
    <div className="store_container">
      <h1 className="title">LOCKED</h1>
      <table>
        <tr>
            <td><Link href="/locked"><img className="green_jeans" src = "/clothing/lock.png"/></Link></td>
        </tr>
        <tr>
        <div>
        <div className="title_top"></div>
            <p>unlock at 500 points</p>
            <div className="title_top"></div>
            </div>
          </tr>
      </table>
      <Link href="/store"><h1 className="back_button">BACK</h1></Link>
    </div>
  )
}
