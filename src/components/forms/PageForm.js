'use client';

import RadioTogglers from "../formItems/RadioTogglers";
import Image from "next/image";
import SubmitForm from "@/components/buttons/SubmitForm";
import pageSave from "@/actions/pageSave";
import { useState, useRef } from "react";
import FormContainer from "../layout/FormContainer";

export default function PageForm({page, session, userImage}) {
    const [bgType, setBgType] = useState((!!page.bgType) ? page.bgType : 'color');
    const [color, setColor] = useState(page.bgColor);
    const [bgImage, setBgImage] = useState(page.bgImage);
    const [avatar, setAvatar] = useState(userImage? userImage : session?.user?.image);
    const avatarInputRef = useRef(null);

    async function saveBaseSettings(formData) {
        const result = await pageSave(formData);
        page.bgType=formData.get('bgType');
        console.log(result);
    }

    function upload(ev, callbackFn) {
        const file = ev.target.files?.[0];
        if (!!file) {
            const data = new FormData;
            data.set('file', file);

            fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                response.json().then(link => {
                    callbackFn(link);
                });
            });
        }
    }

    function handleCoverImageChange(ev) {
        upload(ev, link => {
            setBgImage(link);
        });
    }

    function handleAvatarImageChange(ev) {
        upload(ev, link => {
            setAvatar(link);
        })
    }

    function avatarClickHandle(ev) {
        avatarInputRef.current.click()
    }

    return (
        <div>
            <FormContainer>
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
                                                onChange={handleCoverImageChange}
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
                        <div className="relative -top-8 border-white border-4 w-[128px] h-[128px]">
                            <Image src={avatar}
                                    alt='avatar'
                                    onClick={avatarClickHandle}
                                    width={256} height={256}
                                    className="cursor-pointer object-cover w-full h-full" />
                            <input type='hidden' name='avatar' value={avatar}/>
                            <input type='file'
                                    ref={avatarInputRef}
                                    id='imagePicker'
                                    onChange={handleAvatarImageChange}
                                    hidden />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-16">
                            <label htmlFor="nameIn" className="pageFormInputLabel">Display Name</label>
                            <input type="text" 
                                    name='displayName'
                                    defaultValue={page.displayName}
                                    id='nameIn' 
                                    placeholder="Peter Parker" 
                                    className="pageFormInput mb-6 mt-2" />

                            <label htmlFor="locationIn" className="pageFormInputLabel">Location</label>
                            <input type="text" 
                                    name='location'
                                    defaultValue={page.location}
                                    id='locationIn' 
                                    placeholder="Your location" 
                                    className="pageFormInput mb-6 mt-2" />

                            <label htmlFor="bioIn" className="pageFormInputLabel">Bio</label>
                            <textarea name="bio"
                                        defaultValue={page.bio} 
                                        id='bioIn' 
                                        placeholder="Bio" 
                                        className="pageFormInput mb-6 mt-2" />
                            <SubmitForm>
                                <span className="font-bold">Save</span>
                            </SubmitForm>
                        </div>
                    </div>
                </form>
            </FormContainer>
        </div>
    )
}