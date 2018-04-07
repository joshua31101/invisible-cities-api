import React, { Component } from 'react';

export default class StatueCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="card">
        <div class="image-container">
          <img class="card-img-top" src="{statue.statuePreviewPicURL}" alt="{statue.name}" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{statue.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{statue.statueAsset}</h6>
          <p class="card-text">{statue.description}</p>
          <div class="statue-info-container">
            <p class="statue-info">Like: <span>{statue.like}</span></p>
            <p class="statue-info">Dislike: <span>{statue.dislike}</span></p>
            <div class="option-container">
              <span class="statue-info">Flagged: <span class="text-flag">{statue.isFlagged}</span></span>
              <form action="/statue-flag" method="post">
                <input type="hidden" name="statueId" value="{statueId}">
                <input type="hidden" name="isFlagged" value="{statue.isFlagged}">
                <button type="submit" class="flag-btn btn alert-danger" data-statue-name="{statue.name}">
                  {statue.isFlagged ? 'Unflag' : 'Flag'}
                </button>
              </form>
            </div>
            <div class="option-container">
              <span class="statue-info"><span class="text-private">{statue.isPrivate ? 'Private' : 'Public'}</span></span>
              <form action="/statue-private" method="post">
                <input type="hidden" name="statueId" value="{statueId}">
                <input type="hidden" name="isPrivate" value="{statue.isPrivate}">
                <button type="submit" class="private-btn btn alert-danger" data-statue-name="{statue.name}">
                  {statue.isPrivate ? 'Set public' : 'Set private'}
                </button>
              </form>
            </div>
          </div>
          <div class="button-container">
            <form action="/statue" method="post">
              <input type="hidden" name="statueId" value="{statueId}">
              <button id="removeBtn" type="submit" class="btn alert-danger remove-btn" data-statue-name="{statue.name}">Remove</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}