import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="center">
      <div className="login_form">
        <img className="logo" src = "/Logo.png"/>
        <h1 id="username_title">Username</h1>
        <input type="text" id="fname" name="fname"/>
        <h1>Password</h1>
        <input type="text" id="fname" name="fname"/>
      </div>
      <Link href="/store"><h1 className="login_button">Log In</h1></Link>
    </div>
  )
}
