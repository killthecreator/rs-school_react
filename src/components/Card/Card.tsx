import React, { useState } from 'react';
import like from './../../assets/like.svg';
import bookmark from './../../assets/bookmark.svg';

export default (props: CardProps) => {
  const [likes, setLikes] = useState(props.likes);
  const [bookmarks, setBookmarks] = useState(props.bookmarks);

  const setBtnState = (btnType: Btn) => {
    if (btnType === 'likes') {
      setLikes(likes + likes === props.likes ? 1 : -1);
    }

    if (btnType === 'bookmarks') {
      setBookmarks(bookmarks + bookmarks === props.bookmarks ? 1 : -1);
    }
  };

  const hadnleBtnClick = (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.classList.toggle('card__btn_mode_active');
    setBtnState(target.dataset.btntype as Btn);
  };

  return (
    <li className="card" data-testid="card">
      <div className="card__image-container">
        <img src={props.image} alt="card-image" className="card__image" />
      </div>
      <div className="card__content">
        <p className="card__title" data-testid="card-title">
          {props.title}{' '}
        </p>
        <p className="card__price" data-testid="card-price">
          {props.price}zł
        </p>
        <p className="card__description" data-testid="card-descr">
          {props.text}
        </p>
        <div className="card__btns">
          <button
            className="card__btn"
            onClick={hadnleBtnClick}
            data-btntype="likes"
            data-testid="likes"
          >
            <img src={like} alt="like-icon" />
            <span> {likes}</span>
          </button>
          <button
            className="card__btn"
            onClick={hadnleBtnClick}
            data-btntype="bookmarks"
            data-testid="bookmarks"
          >
            <img src={bookmark} alt="bookmark-icon" />
            <span>{bookmarks}</span>
          </button>
        </div>
      </div>
    </li>
  );
};
