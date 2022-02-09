import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="center">
      <div className="login_form">
        <h1 id="username_title">Username</h1>
        <input type="text" id="fname" name="fname"/>
        <h1>Password</h1>
        <input type="text" id="fname" name="fname"/>
      </div>
      <Link href="/store"><a className="register_button">Register</a></Link>
      <Link href="/store"><a className="login_button">Log In</a></Link>
    </div>
  )
}
