import { useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function FirstItem() {
  const [time, setTime] = useState();
  useEffect(() => {
    console.log("client side");
    setTime(new Date().toISOString());
  }, []);
  return (
    <>
      <h1 className="title">첫번째 아이템</h1>
      <h1>{time}</h1>
    </>
  );
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
