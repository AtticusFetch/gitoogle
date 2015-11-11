class searchFormController {
    /*@ngInject*/
    constructor(gitSearchService) {
        this.query = '';
        this.language = '';
        this.gitSearchService = gitSearchService;
    }

    getRequestParams() {
        return {
            q: this.query,
            language: this.language
        }
    }

    submit() {
        this.gitSearchService.search(this.getRequestParams())
            .success(data => {this.results = data;})
            .error(er => {this.results = er});
    }
}

searchFormController.$inject = ['gitSearchService'];
export default searchFormController;