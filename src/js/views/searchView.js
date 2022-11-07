class searchView {
    #parenEl = document.querySelector('.search');

    getQuery() {
        const query = this.#parenEl.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    }

    #clearInput() {
        this.#parenEl.querySelector('.search__field').value = ''; 
    }

    addSearchHandler(handler) {
        this.#parenEl.addEventListener('submit', (e) => {
                e.preventDefault();
                handler();
            });
    }
}

export default new searchView()
