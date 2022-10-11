import { useRouter } from "next/router";
import React, { useState } from "react";
import {useTranslation} from "next-i18next";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const {t} = useTranslation('header')

    const handleSearch = () => {
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        });
        setSearchTerm("");
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <form>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder={t("search_text")}
                />
            </form>
        </>
    );
};

export default Search;
