import React, { useState, useRef } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import like from './../../assets/icons/like.svg';
import bookmark from './../../assets/icons/bookmark.svg';
import noImage from './../../assets/images/no-image.jpg';
import cross from './../../assets/images/cross.webp';

import CardProps from './CardProps';
import { Btn } from './CardBtn';

const Card = (props: CardProps) => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [likes, setLikes] = useState({ counter: props.likes, active: false });
  const [bookmarks, setBookmarks] = useState({ counter: props.bookmarks, active: false });
  const [active, setActive] = useState(false);

  const setBtnState = (btnType: Btn) => {
    switch (btnType) {
      case 'likes':
        setLikes({
          counter: likes.counter === props.likes ? ++likes.counter : --likes.counter,
          active: !likes.active,
        });
        break;
      case 'bookmarks':
        setBookmarks({
          counter:
            bookmarks.counter === props.bookmarks ? ++bookmarks.counter : --bookmarks.counter,
          active: !bookmarks.active,
        });
        break;
    }
  };

  const hadnleBtnClick = ({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>) => {
    setBtnState(currentTarget.dataset.btntype as Btn);
  };

  const showFullCard = () => setActive(true);
  const closeCard = (e: React.SyntheticEvent<HTMLElement>) => {
    if (
      (closeBtn.current && closeBtn.current.contains(e.target as Node)) ||
      e.target === e.currentTarget
    ) {
      setActive(false);
    }
  };

  return (
    <li
      className={`card group ${props.hidden && !active ? 'min' : ''} ${active ? 'max' : ''}`}
      onClick={(props.hidden && !active && showFullCard) || closeCard}
      data-testid="card"
    >
      <button
        className="hidden absolute top-5 right-5 w-5 h-5 p-0.5 rounded-half 
        border-2 border-black border-solid cursor-pointer group-[.max]:flex"
        ref={closeBtn}
      >
        <img src={cross} alt="cross" />
      </button>
      <div className="overflow-hidden">
        <img
          src={props.image ? props.image : noImage}
          alt="card-image"
          className="w-full h-full object-center object-cover hover:scale-110"
        />
      </div>
      <div
        className="grid grid-cols-1 gap-y-5 p-5 bg-gray-100 
      group-[.min]:py-2.5 group-[.min]:px-5 group-[.max]:p-5 group-[.max]:pt-20"
      >
        <p
          className="max-w-full text-xl font-semibold 
          whitespace-nowrap overflow-hidden text-ellipsis 
          group-[.min]:text-center group-[.max]:text-left 
          group-[.max]:whitespace-normal"
          data-testid="card-title"
        >
          {props.title}
        </p>
        <p className="flex text-base font-medium group-[.min]:hidden" data-testid="card-price">
          {props.price}
          {+props.price ? <span>zł</span> : ''}
        </p>
        <div
          className="flex max-w-full max-h-24 overflow-scroll text-sm 
          group-[.min]:hidden group-[.max]:max-h-none "
          data-testid="card-descr"
        >
          {props.text ? props.text : <LoremIpsum random={false} />}
        </div>
        <div className="flex justify-self-center self-end gap-x-2.5 group-[.min]:hidden">
          <button
            className={`card-btn group bg-cyan-400
             ${likes.active && 'clicked'}`}
            onClick={hadnleBtnClick}
            data-btntype="likes"
            data-testid="likes"
          >
            <img className="w-4 group-[.clicked]:invert" src={like} alt="like-icon" />
            <span> {likes.counter}</span>
          </button>
          <button
            className={`card-btn group bg-green-400  ${bookmarks.active && 'clicked'}`}
            onClick={hadnleBtnClick}
            data-btntype="bookmarks"
            data-testid="bookmarks"
          >
            <img className="w-4 group-[.clicked]:invert" src={bookmark} alt="bookmark-icon" />
            <span>{bookmarks.counter}</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
