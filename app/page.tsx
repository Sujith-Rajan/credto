
import { redirect } from "next/navigation";
import getCurrentUser from "./actions/getCurrentUser";
import LandingPage from "./home/page";

export default async function Home() {

  const currentUser = await getCurrentUser()
  if(!currentUser){
    redirect("/login")
  }

  return (
    <div>
      <LandingPage/>
    </div>
  );
}
