import React, { FC } from 'react'
import { Image } from './Image'
import { Title } from './Title'
import { DescriptionOffers } from './DescriptionOffers';
import { Tag } from './Tag';
import { Author } from './Author';
import Button from '../../Atoms/Button';


const speciaOffers = [
    {
        titleName: "SECONDS [Part I]",
        tagName: ["BIOGRAPHY", "THRILLER", "HORROR"],
        authorName: "Kevin Smiley",
        image: "../../assets/images/approve.svg",
        descName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
    },
    {
        titleName: "Terrible Madness",
        tagName: ["BIOGRAPHY", "THRILLER", "HORROR"],
        authorName: "David Here",
        image: "../../assets/images/approve.svg",
        descName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
    },
    {
        titleName: "REWORK",
        tagName: ["BIOGRAPHY", "THRILLER", "HORROR"],
        authorName: "Margaretha Helew",
        image: "../../assets/images/approve.svg",
        descName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
    }


]
export const SpecialOffers: FC = () => {
    return (
        <>
            {speciaOffers.map((offer, index) => (
                <div className='card' key={index} >
                    <Image image={offer.image} />
                    <div>
                        <Title titleName={offer.titleName} />
                        <Tag tagName={offer.tagName.map((tag, index) => (
                            <li key={index}
                                style={{ width: '2rem', margin: 'auto', cursor: 'pointer', listStyle: 'none' }}>
                                {tag}
                            </li>
                        ))} />
                        <DescriptionOffers descName={offer.descName} />
                        <Author authorName={offer.authorName} />
                        <div className='flex justify-between pt-4'>
                            <Button
                                style={{ color: '#6C5DD3' }}
                                className=" bg-gray-200  text-purple-500 font-bold py-2 px-4 rounded-xl "
                            >
                                Add To Card
                            </Button>
                            <Button
                                className="   text-purple-500 font-bold py-2 px-4 rounded-xl "
                            >
                                20$
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
