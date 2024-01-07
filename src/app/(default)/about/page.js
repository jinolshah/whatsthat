export default async function AboutPage() {
    return (
            <div className="p-8 md:mt-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-black_olive md:text-5xl text-4xl font-bold">
                        A platform to form a collective of your favorites and essentials and share as a single link.
                        <br/><br/>
                    </div>
                    <div className="text-black_olive text-xl">
                        Register and pick your unique username. Visit your settings page to add links and images of your essentials.
                        <br/><br/>
                    </div>
                    <div className="text-black_olive text-xl">
                        Share your page as
                        <span className="font-semibold">
                            &nbsp;wotit.vercel.app/
                            <span className="bg-blush-900">username
                        </span></span>
                        <br/><br/><br/>
                    </div>
                    <div className="text-black_olive text-xl">
                        Track daily visits to your page through the analytics dashboard.
                    </div>
                </div>
            </div>
    );
}