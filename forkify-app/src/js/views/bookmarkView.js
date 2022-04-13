import View from './View';
import icons from '../../img/icons.svg';
import previewView from './previewView';
class bookmarkView extends View {
  _errorMsg = 'No bookmarks yet. Find a recipe and bookmark it';
  _message = '';

  _parentElement = document.querySelector('.bookmarks__list');

  addhandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new bookmarkView();
