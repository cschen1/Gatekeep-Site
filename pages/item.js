import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

export default function Item() {
  return (
    <div>
      <h1>Green Jeans</h1>
      <img className="green_jeans" src = "/clothing/IMG_0421.png"/>

      <p>Green jeans by __ Size: 34w</p>
      <p>Buy now 100 Points</p>
      <p>Buy 2/13/22 50 Points</p>
      <p>Buy 2/16/22 10 Points</p>

      <button type className = "buy_button" button type="buy" name="formBtn">
        Buy
      </button>

    </div>
  )
}
