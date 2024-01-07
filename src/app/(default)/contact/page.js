import { HiOutlineMail } from "react-icons/hi";
export default async function AboutPage() {
    return (
            <div className="p-8 h-full mt-32">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="text-black_olive md:text-4xl text-3xl mb-8">
                        Developed by Jinol Shah
                    </div>
                    <div className="text-slate-500 text-lg">
                        <a href = "mailto: jinolshah08@gmail.com" className="flex items-center gap-4 justify-center">
                            <HiOutlineMail/>
                            jinolshah08@gmail.com
                        </a>
                    </div>
                </div>
            </div>
    );
}