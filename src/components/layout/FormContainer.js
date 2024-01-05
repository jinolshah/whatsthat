export default function FormContainer({children}) {
    return (
        <div className="bg-white rounded-xl drop-shadow md:max-w-4xl m-auto overflow-hidden mb-8">
            {children}
        </div>
    )
}