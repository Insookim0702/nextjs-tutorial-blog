import { useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;

  useEffect(() => {
    console.log("client side");
    setTime(new Date().toISOString());
  }, []);
  return (
    <>
      <h1 className="title">CategorySlug </h1>
      <h1>{slug}</h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
