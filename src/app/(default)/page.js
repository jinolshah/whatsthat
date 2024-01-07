import HeroForm from '@/components/forms/HeroForm';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { Page } from '@/models/Page';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const page = await Page.findOne({owner: session?.user?.email})

  return (
    <main>
      <section className="pt-6 sm:pt-32">
        {/* Main text */}
        <div className="sm:max-w-2xl">
          <h1 className="sm:text-8xl text-6xl font-bold text-black_olive tracking-tight">
            Woah,<br />whatcha got there?
          </h1>
          <h2 className="text-black_olive text-2xl mt-8 tracking-tight">
            Discover and share your essentials with a personalized inventory hub. Effortlessly curate your go-to items in one centralized space.
          </h2>
        </div>

        {/* form and button */}
        <HeroForm session={session} page={page}/>
        {/* Replace with 'Welcome _user_, go to profile' if already logged in and has a username */}
      </section>
    </main>
  );
}
