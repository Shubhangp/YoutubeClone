import React, { useEffect, useState } from 'react'
import { YOUTUBE_Search_Suggestion_API } from '../../../utils/contants';
import SearchSuggetion from "./SearchSuggetion";
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../../../utils/searchSlice';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() =>{
            if (searchCache[searchQuery]) {
              setSuggestion(searchCache[searchQuery]);
            } else {
              getSearchSuggestion();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_Search_Suggestion_API + searchQuery);
        const json = await data.json();
        setSuggestion(json[1]);

        // Update Cache
        dispatch(
            cacheResults({
                [searchQuery] : json[1],
            })
        );
    }

  return (
    <>  
        <div className="flex grow-0 shrink basis-[732px] items-center">
            <div className="flex grow shrink basis-[1e-9px] ml-10 px-1">
                <form className="h-10 relative flex grow shrink basis-[1e-9px]">
                    <div className="relative flex items-center grow shrink basis-[1e-9px] ml-8 pl-4 pr-1 border border-r-0 border-[#ccc] rounded-l-[40px] caret-[#0f0f0f] text-[#121212] shadow-search">
                        <input
                            className="w-full py-[1px] m-0 outline-none text-base font-normal text-inherit"
                            placeholder="Search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() => setShowSuggestion(false)}
                        />
                    </div>
                </form>
                <button className="h-10 w-16 m-0 flex items-center justify-center bg-[#f8f8f8] border border-[#d3d3d3] rounded-r-[40px] cursor-pointer">
                    <svg
                        enableBackground="new 0 0 24 24"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                    >
                        <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                    </svg>
                </button>
            </div>
            <div className="ml-4 w-10 h-10 flex items-center justify-center rounded-[100px] bg-black/[0.05]">
                <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
                    <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
                </svg>
            </div>
        </div>
        {suggestion.length !== 0 ? 
            (<>
                {showSuggestion && (<SearchSuggetion suggestion={suggestion} />)}
            </> )
            : ("")
        }
    </>
  );
}

export default Search
