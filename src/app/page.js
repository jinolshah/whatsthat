export default function Home() {
  return (
    <main>
      <section className="pt-32">
        {/* Main text */}
        <div className="max-w-2xl">
          <h1 className="text-8xl font-bold text-black_olive tracking-tight">
            Woah,<br />whatcha got there?
          </h1>
          <h2 className="text-black_olive text-2xl mt-8 tracking-tight">
            Discover and share your essentials with a personalized inventory hub. Effortlessly curate your go-to items in one centralized space.
          </h2>
        </div>

        {/* form and button */}
        <form className="inline-flex items-center mt-10 pr-6">
          <div className='bg-white overflow-hidden items-center inline-flex p-4'>
            <p className='text-black_olive text-lg'>
              whatsthat.op/
            </p>
            <input type="text" className="text-black_olive placeholder-black_olive-700 text-lg" placeholder="username"/>
          </div>
          <button type="submit" className="bg-blush text-black_olive py-4 px-6 rounded-full ml-4 text-lg">
            Join
          </button>
        </form>
      </section>
    </main>
  );
}
