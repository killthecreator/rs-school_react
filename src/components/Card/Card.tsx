import React, { useState, useRef } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import like from './../../assets/like.svg';
import bookmark from './../../assets/bookmark.svg';
import noImage from './../../assets/no-image.jpg';

import CardProps from './CardProps';
import { Btn } from './CardBtn';

import './Card.scss';

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
    if ((closeBtn.current && e.target === closeBtn.current) || e.target === e.currentTarget) {
      setActive(false);
    }
  };

  return (
    <li
      className={`card ${props.hidden ? 'min' : ''} ${active ? 'active' : ''}`}
      onClick={(props.hidden && !active && showFullCard) || closeCard}
      data-testid="card"
    >
      <button className="card__close-btn" ref={closeBtn}>
        X
      </button>
      <div className="overflow-hidden">
        <img
          src={props.image ? props.image : noImage}
          alt="card-image"
          className="w-full h-full object-center object-cover hover:scale-110"
        />
      </div>
      <div className="card__content grid grid-cols-1 gap-y-5 p-5 bg-gray-100">
        <p className="card__title max-w-full text-xl font-semibold" data-testid="card-title">
          {props.title}
        </p>
        <p className="card__price" data-testid="card-price">
          {props.price}
          {+props.price ? <span>zł</span> : ''}
        </p>
        <div className="card__description" data-testid="card-descr">
          {props.text ? props.text : <LoremIpsum random={false} />}
        </div>
        <div className="card__btns">
          <button
            className={`card__btn ${likes.active && 'active'}`}
            onClick={hadnleBtnClick}
            data-btntype="likes"
            data-testid="likes"
          >
            <img src={like} alt="like-icon" />
            <span> {likes.counter}</span>
          </button>
          <button
            className={`card__btn ${bookmarks.active && 'active'}`}
            onClick={hadnleBtnClick}
            data-btntype="bookmarks"
            data-testid="bookmarks"
          >
            <img src={bookmark} alt="bookmark-icon" />
            <span>{bookmarks.counter}</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
