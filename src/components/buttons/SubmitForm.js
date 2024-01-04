import { useFormStatus } from "react-dom";

export default function SubmitForm({children}) {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className='bg-olivine-700 disabled:bg-olivine-900 disabled:text-black_olive-800 py-4 px-8 rounded-full text-black_olive
                        flex flex-row items-center text-nowrap justify-center gap-2 mt-6'>
            {children}
        </button>
    )
}