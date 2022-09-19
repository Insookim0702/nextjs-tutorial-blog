import { useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CategorySlug() {
  const router = useRouter();
  const { date } = router.query;

  return (
    <>
      <h1 className="title">Cart Optional Dynamic router</h1>
      <h1>{date}</h1>
      <Link href="/cart/2022/06/06">
        <a>2022년 06월 06일로</a>
      </Link>

      <button onClick={() => router.push("/cart/2022/05/05")}>
        2022년 05월 05일로
      </button>
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
