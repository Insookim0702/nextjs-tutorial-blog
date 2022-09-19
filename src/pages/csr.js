import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export default function Csr() {
  const [time, setTime] = useState();
  useEffect(() => {
    console.log("client side");
    setTime(new Date().toISOString());
  }, []);
  return (
    <>
      <h1 className="title">
        <a href="https://nextjs.org">Client side rendering</a>
      </h1>
      <h1>{time}</h1>
    </>
  );
}

Csr.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
