import View from './View';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    console.log(numOfPages);
    //Page 1, and other pages
    if (this._data.page == 1 && numOfPages > 1)
      return this.generateNextButton();
    //last page
    if (this._data.page == numOfPages && numOfPages > 1) {
      return this.generatePreviousButton();
    }
    //other page
    if (this._data.page < numOfPages)
      return this.generateNextButton() + this.generatePreviousButton();
    //Page 1 and no otherpages
    return '';
  }
  generateNextButton() {
    return `
      <button data-goto="${
        +this._data.page + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${+this._data.page + 1}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>`;
  }
  generatePreviousButton() {
    return `
    <button data-goto="${
      +this._data.page - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
         </svg>
        <span>Page ${+this._data.page - 1}</span>
    </button>`;
  }

  addHandlerClick(handler) {
    this._parentElement,
      addEventListener('click', function (e) {
        const btn = e.target.closest('.btn--inline');
        if (!btn) return;
        const goToPage = btn.dataset.goto;
        handler(goToPage);
      });
  }
}
export default new PaginationView();
