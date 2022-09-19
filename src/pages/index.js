import Link from "next/link";
export async function getServerSideProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}
export default function Home({ time }) {
  return (
    <>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1>{time}</h1>
      <Link href="/csr">CSR 이동</Link>
      <Link href="/ssg">ssg</Link>
    </>
  );
}
