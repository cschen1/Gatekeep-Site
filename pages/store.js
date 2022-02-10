import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Icon from '../comp/icon';
import IconLocked from '../comp/icon_locked';


export default function Store() {
  //https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
  //------------------------------------------------------------------------
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-2-13`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <span>
        {timeLeft[interval]}{interval}{""}
      </span>
    );
  });
  //------------------------------------------------------------------------

  return (
    <div className="store_container">
      <table className='header'>
        <tr>
          <td className='header_col'><h1 className='timer'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h1></td>
          <td className='header_col'><Link href="/about"><img className="logo" src = "/Logo.png"/></Link></td>
          <td className='header_col'><h1 className='point'>20 POINTS</h1></td>
        </tr>
      </table>

      <table>
        <tr>
          <td><IconLocked image={"/clothing/IMG_0431.png"} hover_img={"/clothing/lock.png"}/></td>
          <td><Icon image={"/clothing/IMG_0421.png"} hover_img={"/Quickbuy.png"}/></td>
          <td><Icon image={"/clothing/IMG_0424.png"} hover_img={"/Quickbuy.png"}/></td>
        </tr>
        <tr>
          <td><Icon image={"/clothing/IMG_0425.png"} hover_img={"/Quickbuy.png"}/></td>
          <td><Icon image={"/clothing/IMG_0426.png"} hover_img={"/Quickbuy.png"}/></td>
          <td><Icon image={"/clothing/IMG_0427.png"} hover_img={"/Quickbuy.png"}/></td>
        </tr>
        <tr>
          <td><Icon image={"/clothing/IMG_0428.png"} hover_img={"/Quickbuy.png"}/></td>
          <td><Icon image={"/clothing/IMG_0429.png"} hover_img={"/Quickbuy.png"}/></td>
          <td><Icon image={"/clothing/IMG_0430.png"} hover_img={"/Quickbuy.png"}/></td>
        </tr>
      </table>
      <div className="title_top"></div>
      <Link href="/cart"><h1 className="cart_button">VIEW CART</h1></Link>

    </div>
  )
}
