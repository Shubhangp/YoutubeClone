import React from 'react'

const SearchSuggetion = ({ suggestion }) => {
  return (
    <div className="min-w-[533px] fixed top-[52px] left-[350px] text-left z-[2021]">
      <div className="bg-white rounded-xl border border-[#ccc] border-t-0 shadow-3xl cursor-pointer">
        <div className="pt-3 pb-2">
          <ul className="list-none">
            {suggestion.map((keyword, index) =>
                <li key={index} className="text-left text-base text-[#222] leading-8 pr-6 pl-4 hover:bg-[#eee]">
                    <div className="flex items-center whitespace-pre">
                        <svg className="mr-[14px]" enableBackground="new 0 0 20 20" width="20" height="20" viewBox="0 0 24 24" focusable="false">
                            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                        <b>{keyword}</b>
                    </div>
                </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggetion;
