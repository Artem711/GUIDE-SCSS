// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Dashboard = (props) => {
  console.log(props)

  return (
    <>
      <h1>{props.user.name}</h1>
      <p>Bio: {props.user.bio}</p>
      <p>Blog: {props.user.blog} </p>
    </>
  )
}

Dashboard.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/artem711")
  const user = await res.json()

  return { user }
}

export default Dashboard
