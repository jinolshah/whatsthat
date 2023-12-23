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
        <form className="flex flex-row flex-wrap items-center mt-10 pr-6">
          <div className='bg-white overflow-hidden p-4 mb-4 mr-4 flex flex-row'>
            <p className='text-black_olive'>
              wotit.app/
            </p>
            <input type="text" className="text-black_olive placeholder-black_olive-700 focus:outline-none" placeholder="username"/>
          </div>
          <button type="submit" className="bg-blush-600 text-black_olive py-4 px-6 rounded-full mb-4">
            Join
          </button>
        </form>
      </section>
    </main>
  );
}
