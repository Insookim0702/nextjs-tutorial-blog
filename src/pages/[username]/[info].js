import { useRouter } from "next/router";

export default function Info() {
  const router = useRouter();
  const { username, info } = router.query;
  return (
    <h1>
      {username}'s {info}
    </h1>
  );
}
