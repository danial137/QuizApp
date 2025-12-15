import { ICategory } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
    category: ICategory;
}

const HomeCard = ({ category }: Props) => {
    const imageSrc = category.image
        ? category.image
        : `/categories/image--${category.name
            .toLowerCase()
            .replace(/\s+/g, "-")}.svg`;

    return (
        <div className="border-2 rounded-xl p-1 cursor-pointer shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <div className="rounded-xl h-[9rem] py-1 flex items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="h-full  rounded-xl"
                    priority
                />
            </div>

            <div>
                <h2>{category.name}</h2>
            </div>
        </div>
    );
};

export default HomeCard;
