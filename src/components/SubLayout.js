import Link from "next/link";

export default function SubLayout({ children }) {
  return (
    <div className="container">
      <h1>
        <Link href="/">Home으로</Link>
        {children}
      </h1>
    </div>
  );
}
