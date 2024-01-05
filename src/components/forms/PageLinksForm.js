'use client';

import SubmitForm from "../buttons/SubmitForm";
import FormContainer from "../layout/FormContainer";
import { IoMdAdd } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import { TbGripVertical } from "react-icons/tb";
import { ReactSortable } from "react-sortablejs";
import { useState } from "react";

export function PageLinksForms({page, session}) {
    const [links, setLinks] = useState(page.links || []);

    function save(formData) {

    }

    function addNewLink() {
        setLinks(prev => {
            return [...prev, 
                {
                    key: Date.now().toString(),
                    title: '', 
                    subtitle: '', 
                    icon: '', 
                    link: ''
                }];
        });
    }

    return(
        <FormContainer>
            <form action={save}>
                <div className="p-16 -mt-4">
                    <div className="flex-col items-center justify-center">
                        <div className="flex items-center justify-center mb-8 px-4">
                            <button type="button" 
                                    className="bg-blush text-white rounded-full grow py-3
                                                inline-flex items-baseline justify-center"
                                    onClick={addNewLink}>
                                <span className="inline-flex items-center gap-1">
                                    <IoMdAdd className="text-lg"/> 
                                    Add link
                                </span>
                            </button>
                        </div>
                        <div className="px-2">
                            <ReactSortable list={links} setList={setLinks}
                                            animation={150}>
                                {links.map(link => (
                                    <div key={link.key} className="flex items-center mb-8">
                                        <div className="mr-4">
                                            <TbGripVertical className="cursor-grab active:cursor-grabbing"/>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-[128px] h-[128px] border-2 border-slate-100 rounded-xl">
                                                <div className="p-4 rounded-full bg-atomic_tangerine-900">
                                                    <RiImageAddLine />
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <input type="text" placeholder="title" className="pageFormInput mb-2"/>
                                                <input type="text" placeholder="subtitle" className="pageFormInput mb-2"/>
                                                <input type="text" placeholder="link" className="pageFormInput"/>
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