import NavList from "./NavList/NavList"

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-sky-600 text-white">
      <div>
        <h1　className="px-4 text-2xl font-bold">Next Todo App</h1>
        <NavList />
      </div>
    </div>
  )
}

export default SideMenu
