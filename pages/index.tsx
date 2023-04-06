import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  console.log(user)

  return (
    <>
      <h1 className="text-2xl text-green-400"> netflix clone</h1>
      <p className="text-white">Login as:{user?.email}</p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">
        Logout
      </button>
    </>
  );
}
