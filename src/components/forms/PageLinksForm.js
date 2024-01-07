'use client';

import SubmitForm from "../buttons/SubmitForm";
import FormContainer from "../layout/FormContainer";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { RiImageAddLine, RiDeleteBinLine } from "react-icons/ri";
import { TbGripVertical } from "react-icons/tb";
import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
import { upload } from "@/libs/upload";
import { pageSaveLinks } from "@/actions/pageSave";

export function PageLinksForms({page, session}) {
    const [links, setLinks] = useState(page.links || []);

    async function save() {
        await pageSaveLinks(links);
    }

    function addNewLink() {
        setLinks(prev => {
            return [...prev, 
                {
                    key: Date.now().toString(),
                    title: '', 
                    subtitle: '', 
                    icon: '', 
                    url: ''
                }];
        });
    }

    function handleUpload(ev, linkKeyUpload) {
        upload(ev, uploadedImageUrl => {
            setLinks(prevLinks => {
                const newLinks = [...prevLinks];
                newLinks.forEach((link, index) => {
                    if (link.key == linkKeyUpload) {
                        link.icon = uploadedImageUrl;
                    }
                });
                return newLinks;
            });
        });
    }

    function handleLinkChange(ev, changedLinkKey, changeEntity) {
        setLinks(prevLinks => {
            const newLinks = [...prevLinks];
            newLinks.forEach((link, index) => {
                if (link.key == changedLinkKey) {
                    link[changeEntity] = ev.target.value;
                }
            });
            return newLinks;
        });
    }

    function removeLink(keyToRemove) {
        setLinks(prevLinks => 
            [...prevLinks].filter(l => l.key != keyToRemove)    
        );
    }

    return(
        <FormContainer>
            <form action={save}>
                <div className="px-8 pt-2 pb-16 md:p-16 -mt-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center mb-8 w-full md:pt-0 pt-8">
                            <button type="button" 
                                    className="bg-verdigris text-white rounded-full grow py-3
                                                inline-flex items-baseline justify-center"
                                    onClick={addNewLink}>
                                <span className="inline-flex items-center gap-1">
                                    <IoMdAdd className="text-lg"/> 
                                    Add link
                                </span>
                            </button>
                        </div>
                        <div className="md:px-4">
                            <ReactSortable list={links} setList={setLinks}
                                            animation={150}
                                            handle={".handle"}>
                                {links.map(link => (
                                    <div key={link.key} className="flex items-center mb-8">
                                        <div className="hidden md:flex mr-4 self-stretch items-center handle 
                                                        cursor-grab active:cursor-grabbing">
                                            <TbGripVertical className=""/>
                                        </div>
                                        <div className="md:flex items-center justify-center align-middle">
                                            <input id={'icon'+link.key} 
                                                    type="file" 
                                                    hidden
                                                    onChange={ev => handleUpload(ev, link.key)}/>
                                            <label htmlFor={'icon'+link.key}
                                                    className="flex-none w-[64px] md:w-[128px] h-[64px] md:h-[128px] 
                                                                rounded-xl cursor-pointer overflow-hidden">
                                                <div className="flex items-center justify-center md:h-full border-2
                                                                border-slate-100 rounded-xl overflow-hidden
                                                                w-[128px] h-[128px] mb-2 md:mb-0 mx-auto">
                                                    {
                                                        !link.icon ? 
                                                            (
                                                                <div className="p-4 rounded-full bg-atomic_tangerine-900">
                                                                    <RiImageAddLine />
                                                                </div>
                                                            ) :
                                                            (
                                                                <Image className="object-cover aspect-square"
                                                                src={link.icon} alt={'icon'} width={256} height={256} />
                                                            )
                                                    }
                                                </div>
                                            </label>
                                            <div className="md:ml-4">
                                                <input value={link.title}
                                                    onChange={ev => handleLinkChange(ev, link.key, 'title')}
                                                    type="text" placeholder="title" className="pageFormInput mb-2"/>
                                                <input value={link.subtitle}
                                                    onChange={ev => handleLinkChange(ev, link.key, 'subtitle')}
                                                    type="text" placeholder="subtitle" className="pageFormInput mb-2"/>
                                                <input value={link.url}
                                                    onChange={ev => handleLinkChange(ev, link.key, 'url')}
                                                    type="text" placeholder="link" className="pageFormInput"/>
                                            </div>
                                            <div className="md:ml-2 md:px-1 hover:bg-blush text-slate-500 hover:text-white 
                                                            self-stretch flex items-center rounded-full justify-center md:mt-0 mt-4">
                                                <button
                                                    className="self-stretch"
                                                    onClick={() => removeLink(link.key)}>
                                                    <RiDeleteBinLine />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ReactSortable>
                        </div>
                    </div>
                    <SubmitForm>
                        <span className="font-bold">Save</span>
                    </SubmitForm>
                </div>
            </form>
        </FormContainer>
    )
}