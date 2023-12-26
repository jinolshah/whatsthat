import HeroForm from '@/components/forms/HeroForm';

export default function Home() {
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
        <HeroForm />
      </section>
    </main>
  );
}
