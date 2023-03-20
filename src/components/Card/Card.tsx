import React, { Component } from 'react';
import like from './../../assets/like.svg';
import bookmark from './../../assets/bookmark.svg';

class Card extends Component<CardProps> {
  state = {
    likes: this.props.likes,
    bookmarks: this.props.bookmarks,
  };

  setBtnState(btnType: Btn) {
    this.setState(() => {
      return this.state[btnType] === this.props[btnType]
        ? { [btnType]: this.props[btnType] + 1 }
        : { [btnType]: this.props[btnType] };
    });
  }

  hadnleBtnClick(e: React.SyntheticEvent) {
    const target = e.currentTarget as HTMLButtonElement;
    target.classList.toggle('card__btn_mode_active');
    this.setBtnState(target.dataset.btntype as Btn);
  }

  render() {
    return (
      <li className="card" data-testid="card">
        <div className="card__image-container">
          <img src={this.props.image} alt="card-image" className="card__image" />
        </div>
        <div className="card__content">
          <p className="card__title">{this.props.title}</p>
          <p className="card__price">{this.props.price}zł</p>
          <p className="card__description">{this.props.text}</p>
          <div className="card__btns">
            <button
              className="card__btn"
              onClick={this.hadnleBtnClick.bind(this)}
              data-btntype="likes"
              data-testid="likes"
            >
              <img src={like} alt="like-icon" />
              <span> {this.state.likes}</span>
            </button>
            <button
              className="card__btn"
              onClick={this.hadnleBtnClick.bind(this)}
              data-btntype="bookmarks"
              data-testid="bookmarks"
            >
              <img src={bookmark} alt="bookmark-icon" />
              <span>{this.state.bookmarks}</span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
