import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-6">
        <h1 className="text-6xl font-bold">
          Woah,<br />what's that?
        </h1>
        <h2 className="text-slate-500 text-4xl mt-6">
          List of your stuff, all in one place.
        </h2>

      </section>
    </main>
  )
}
