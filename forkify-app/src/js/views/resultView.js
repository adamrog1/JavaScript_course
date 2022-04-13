import View from './View';
import icons from '../../img/icons.svg';
import previewView from './previewView';
class ResultsView extends View {
  _errorMsg = 'Could not find the recipe, please find another one';
  _message = '';

  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
