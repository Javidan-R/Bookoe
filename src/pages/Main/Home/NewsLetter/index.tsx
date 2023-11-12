import React from 'react'
import group from '../../../../assets/images/group.svg';
import openBook from '../../../../assets/images/openBook.svg';
import store from '../../../../assets/images/store.svg';
import quill from '../../../../assets/images/quill.svg';
import { NewsLetterComponent } from '../../../../components/NewsLetterComponent';

const newsLetter = [
    {
        image:group,
        title:"Happy Customers",
        count:125.663
    },
    {
        image:openBook,
        title:"Book Collections",
        count:50.672
    },
    {
        image:store,
        title:"Our Stores",
        count:1.562
    },
    {
        image:quill,
        title:"Famous Writers",
        count:457
    },
]

export const NewsLetter = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 ' >
        {
            newsLetter.map((news,index)=>(
                <NewsLetterComponent key={index} image={news.image} title={news.title} count={news.count} />
            ))
        }
    </section>
  )
}
