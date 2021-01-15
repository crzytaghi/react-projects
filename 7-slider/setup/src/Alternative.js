import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > people.length - 1) {
                index = 0;
            }
            return index;
        })
    };

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = people.length - 1;
            }
            return index;
        })
    }

    // useEffect(() => {
    //     const lastIndex = people.length - 1;
    //     if (index < 0) {
    //         setIndex(lastIndex);
    //     } else if (index > lastIndex) {
    //         setIndex(0);
    //     }
    // }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex - 1;
                if (index < 0) {
                    index = people.length - 1;
                }
                return index;
            });
        }, 3000);
        // cleanup function
        // This allows you to manually shuffle through the items without continuously running the setInterval function since the index value changes after every time and since index is the dependancy it would invoke the useEffect function causing the site to crash.
        return () => {
            clearInterval(slider);
        }
    }, [index])

    return <section className="section">
        <div className="title">
            <h2>
                <span>/</span>reviews
      </h2>
        </div>
        <div className="section-center">
            {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;
                let position = 'nextSlide';
                if (personIndex === index) {
                    position = 'activeSlide';
                } else if (personIndex === index - 1 || (index === 0 && personIndex == people.length - 1)) {
                    position = 'lastSlide';
                }
                return (
                    <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                );
            })}
            <button className="prev" onClick={prevSlide}>
                <FaChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
                <FaChevronRight />
            </button>
        </div>
    </section>;
}

export default App;
