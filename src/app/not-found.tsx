import Link from "next/link"

const notFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50">
      <h1 className="text-8xl font-bold bg-gradient-to-r from-amber-500 to-emerald-500
    bg-clip-text text-transparent">404</h1>
      <p className="text-4xl font-medium">Page Not Found... 🐶</p>
      <Link href='/' className="mt-4 text-xl font-semibold text-red-400 hover:text-red-300">TOPへ戻る</Link>
    </div>
  )
}

export default notFoundPage
