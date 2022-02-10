import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Icon from '../comp/icon';

export default function Cart() {
    return (
        <div className="store_container">
        <h1>CART</h1>
        <table>
            <tr>
                <td><Link href="/item"><img className="item_icon_image" src = "/clothing/IMG_0421.png"/></Link></td>
                <td><h1>$75</h1></td>
            </tr>
            <tr>
                <td><Link href="/item"><img className="item_icon_image" src = "/clothing/IMG_0425.png"/></Link></td>
                <td><h1>$50</h1></td>
            </tr>
            <tr>
            </tr>
        </table>
        <h2>$125</h2>
        <h2>+150 points</h2>
        <div className="title_top"></div>
       

        <Link href="/store_new"><h1>BUY</h1></Link>
        <div className="title_top"></div>
        <Link href="/store"><h1>DON'T BUY</h1></Link>

        </div>

       
    )
}