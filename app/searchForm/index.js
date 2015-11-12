class searchFormController {
    /*@ngInject*/
    constructor(gitSearchService) {
        this.query = '';
        this.gitSearchService = gitSearchService;
    }

    getRequestParams() {
        let parsedParams = {};
        let params = this.query.split('+');
        params.forEach((parameter) => {
            parameter = parameter.trim();
            let subParams = parameter.split(':');
            if (subParams.length > 1) {
                let trimmedParams = subParams.map(Function.prototype.call, String.prototype.trim);
                Object.defineProperty(parsedParams, trimmedParams[0], {
                    value: trimmedParams[1]
                });
            } else {
                Object.defineProperty(parsedParams, 'q', {value: parameter});
            }
        });
        return parsedParams;
    }

    submit() {
        this.gitSearchService.search(this.getRequestParams())
            .success(data => {this.results = data;})
            .error(er => {this.results = er});
    }
}

searchFormController.$inject = ['gitSearchService'];
export default searchFormController;