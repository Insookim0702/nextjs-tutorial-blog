import layout from './layout.module.css'
export default function Layout({ children }) {
  return (
    <div className={layout.container}>
      <main>{children}</main>
      <footer>레이아웃 푸터</footer>
    </div>
  )
}
