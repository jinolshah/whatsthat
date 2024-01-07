import { Events } from "@/models/Events";
import { Page } from "@/models/Page";
import { User } from "@/models/User";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoLocationOutline } from "react-icons/io5";

export default async function MyPage({params}) {
    const uri = params.uri;

    mongoose.connect(process.env.MONGODB_URI);
    const page = await Page.findOne({uri: uri});

    if (!page) {
        redirect('/');
    }

    const user = await User.findOne({email: page.owner});

    await Events.create({uri: uri, type: 'view'})

    function createSocialLink(url) {
        if(!url) {
            return '#'
        }

        if (url.startsWith('http')) {
            return url
        } else {
            return 'https://' + url
        }
    }

    return(
        <div className="p-8">
            {/* <div className='flex flex-col justify-center items-center h-64 bg-cover bg-center'
                style={
                    page.bgType == 'color'
                        ? {backgroundColor: page.bgColor}
                        : {backgroundImage: `url(${page.bgImage})`}
                }
            >
            </div> */}
            <div className="flex-col">
                <div className="relative w-[128px] h-[128px] rounded-full overflow-hidden mx-auto">
                    <Image src={user.customImage ? user.customImage : user.image}
                            alt='avatar'
                            width={256} height={256}
                            className="object-cover w-full h-full" />
                </div>
                <span className="flex justify-center mt-8 font-bold text-lg text-gray-400">
                    {'@'+page.uri}
                </span>
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
                {
                    (!!page.displayName) &&
                        <span className="text-xl font-bold">{page.displayName}</span>
                }
                {
                    (!!page.location) &&
                        <div className="inline-flex items-center gap-1 text-gray-700">
                            <span><IoLocationOutline /></span>
                            <span>{page.location}</span>
                        </div>
                }
            </div>
            <div className="max-w-2xl mx-auto mt-8 p-2">
                {
                    page.links.map(link => (
                        <Link href={createSocialLink(link.url)}
                                ping={'/api/click?url='+btoa(link.url)}
                                key={link.key}
                                target={ !!link.url ? "_blank" : '_self'}>
                            <div key={link.key} className="flex items-center flex-row mb-8 min-h-[78px]
                                                        bg-slate-200 hover:bg-blush-900 p-2 rounded-xl">
                                {
                                    (!!link.icon) && (
                                        <div className="flex-none w-[64px] h-[64px] border-2 absolute
                                        border-slate-100 rounded-xl overflow-hidden">
                                            <Image className="object-cover aspect-square"
                                                    src={link.icon} alt={'icon'} width={256} height={256} />
                                        </div>
                                    )
                                }
                                <div className="flex flex-col grow px-[78px] min-w-0 text-center">
                                    <span className="break-all hyphens-auto min-w-0">{link.title}</span>
                                    <span className="text-slate-500 break-all hyphens-auto min-w-0">{link.subtitle}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}