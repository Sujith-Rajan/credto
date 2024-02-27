import { getServerSession } from "next-auth";
import LandingPage from "./home/page";
import Login from "./login/page";
import { authOptions } from "./lib/auth";

export default async function Home() {

  const session = await getServerSession(authOptions)
 
  return (
    <div>
      {session 
      ?
    <LandingPage/>
    :
    <Login/>
   }
    </div>
  );
}
