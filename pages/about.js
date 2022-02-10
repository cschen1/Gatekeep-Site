import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <div className="store_container">
      <h1 className="title">ABOUT</h1>
      <p className="about_text">welcome to gatekeep</p>
      <p className="about_text">an online clothing store available only to the most exclusive of customers</p>
      <p className="about_text">by having access to this site, you are already part of the elite</p>
      <p className="about_text">don't take this for granted</p>
      <div className="title_top"></div>
      <p className="about_text">our shop operates on a point system</p>
      <p className="about_text">every week the shop is updated with new items</p>
      <div className="title_top"></div>
      <p className="about_text">for every 3 days that an item is listed, the amount of points earned after purchase will decrease</p>
      <p className="about_text">for example, a t-shirt earns you 100 points if purchased on the listed date, 50 points 3 days after and 10 points 6 days after</p>
      <p className="about_text">purchase items as soon as possible</p>
      <div className="title_top"></div>
      <p className="about_text">if you have enough points accumulated then you can view and purchase the exclusive item of the week</p>
      <p className="about_text">the amount of points required will vary each week and with each item</p>
      <p className="about_text">for every week, that you do not purchase an item, your points will go down by 20</p>
      <Link href="/store"><h1 className="title_top">BACK</h1></Link>
    </div>
  )
} 
