// PLUGINS IMPORTS //
import Link from "next/link"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
