export default function RadioTogglers({options, defaultValue, onChange}) {
    return (
        <div>
            {
                options.map((option, i) => (
                    <div className="inline-flex" key={i}>
                        <input type="radio" 
                                name={option.name} 
                                id={option.id}
                                value={option.value}
                                hidden 
                                defaultChecked={defaultValue==option.value}
                                onClick={(ev)=>onChange(ev.target.value)}
                                className="peer"/>
                        <label htmlFor={option.id} className={`radio text-center self-center 
                                                        py-2 px-4 cursor-pointer hover:bg-opacity-90 ${option.rounded}
                                                        bg-white peer-checked:text-white peer-checked:bg-blush`}>
                            {option.label}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}