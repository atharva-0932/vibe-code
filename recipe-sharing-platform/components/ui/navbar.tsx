import Link from "next/link"
import Image from "next/image"
const navbar = () => {
  return (
    <nav className="Navbar">
    <Link href="/">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <Image
          src="/logo.png"
          alt="Logo"
          width={46}
          height={44}
        />
      </div>
    </Link>
    <div className="flex items-center gap-8">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
  )
}

export default navbar