'use client';

import RadioTogglers from "../formItems/RadioTogglers";
import Image from "next/image";
import SubmitForm from "@/components/buttons/SubmitForm";
import pageSave from "@/actions/pageSave";
import { useState } from "react";

export default function PageForm({page, session}) {
    const [bgType, setBgType] = useState((!!page.bgType) ? page.bgType : 'color');
    const [color, setColor] = useState(page.bgColor);
    const [bgImage, setBgImage] = useState(page.bgImage);

    async function saveBaseSettings(formData) {
        const result = await pageSave(formData);
        page.bgType=formData.get('bgType');
        console.log(result);
    }

    function handleFileUpload(ev) {
        const file = ev.target.files?.[0];
        if (!!file) {
            const data = new FormData;
            data.set('file', file);

            fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                response.json().then(link => {
                    setBgImage(link);
                });
            });
        }
    }

    return (
        <div>
            <form action={saveBaseSettings}>
                <div className='flex flex-col justify-center items-center h-64 bg-cover bg-center'
                    style={
                        bgType == 'color'
                            ? {backgroundColor: color}
                            : {backgroundImage: `url(${bgImage})`}
                    }>
                    <RadioTogglers
                        defaultValue = {page.bgType}
                        options = {[
                            {name:'bgType', label:'Color', id:'bgColor', rounded: 'rounded-l-lg', value: 'color'},
                            {name:'bgType', label:'Image', id:'bgImage', rounded: 'rounded-r-lg', value: 'image'},
                        ]}
                        onChange={(val)=>setBgType(val)}
                    />
                    <div className="mt-2 flex align-middle gap-2 bg-white px-2 py-1 rounded-lg">
                        {
                            (bgType == 'color') &&
                                <>
                                    <label htmlFor="colorInput" className="cursor-pointer">Background color:</label>
                                    <input type='color'
                                            className="cursor-pointer"
                                            name='bgColorInput' 
                                            id="colorInput" 
                                            defaultValue={color}
                                            value={color}
                                            onChange={(ev) => setColor(ev.target.value)} />
                                </>
                        }
                        {   
                            (bgType == 'image') &&
                                <>
                                    <input type='hidden' name='bgImageInput' value={bgImage}/>
                                    <input type='file'
                                            name='image' 
                                            id='imagePicker'
                                            onChange={handleFileUpload}
                                            hidden />
                                    <label
                                        htmlFor="imagePicker"
                                        className="cursor-pointer">
                                        Change Image
                                    </label>
                                </>

                        }
                    </div>
                </div>
                <div className="flex justify-center -mb-12">
                    <Image src={session?.user?.image}
                            alt={'avatar'} 
                            width={128} height={128}
                            className="relative -top-8 border-white border-4" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="p-16">
                        <label htmlFor="nameIn" className="pageFormInputLabel">Display Name</label>
                        <input type="text" 
                                name='displayName'
                                defaultValue={page.displayName}
                                id='nameIn' 
                                placeholder="Peter Parker" 
                                className="pageFormInput" />

                        <label htmlFor="locationIn" className="pageFormInputLabel">Location</label>
                        <input type="text" 
                                name='location'
                                defaultValue={page.location}
                                id='locationIn' 
                                placeholder="Your location" 
                                className="pageFormInput" />

                        <label htmlFor="bioIn" className="pageFormInputLabel">Bio</label>
                        <textarea name="bio"
                                    defaultValue={page.bio} 
                                    id='bioIn' 
                                    placeholder="Bio" 
                                    className="pageFormInput" />
                        <SubmitForm>
                            <span className="font-bold">Save</span>
                        </SubmitForm>
                    </div>
                </div>
            </form>
        </div>
    )
}