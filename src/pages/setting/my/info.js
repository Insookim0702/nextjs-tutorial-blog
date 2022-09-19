import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps() {
  console.log("server side");
  return { props: {} };
}

export default function Info() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { state = "initial" } = router.query;

  return (
    <>
      <Link href="/">Home</Link>
      My Info
      <p>clicked: {String(clicked)}</p>
      <p>Status: {state}</p>
      <button
        onClick={() => {
          setClicked(true);
          location.replace("/setting/my/info?state=editing");
        }}
      >
        location.replace
      </button>
      <button
        onClick={() => {
          setClicked(true);
          router.push("/setting/my/info?state=editing");
        }}
      >
        router.push
      </button>
      <button
        onClick={() => {
          setClicked(true);
          router.push("/setting/my/info?state=editing", undefined, {
            shallow: true,
          });
        }}
      >
        router.push shallow
      </button>
    </>
  );
}
