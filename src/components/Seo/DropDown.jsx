import {useState} from "react";

export function DropDown({children}){
    const [isExpanded, setIsExpanded] = useState(false);
    return(
        <div className="flex flex-col gap-6">
            <p className={`transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'} overflow-hidden`}>
                {children}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="border-b-[1.5px] border-white font-roboto-condensed text-sm text-center pb-1.5 hover:text-[#F7F7F7] transition flex flex-row gap-1.5 items-center w-min"
            >
                {isExpanded ? 'Zwiń' : 'Rozwiń'}
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isExpanded ? 'rotate-180' : ''}`}>
                    <path d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}