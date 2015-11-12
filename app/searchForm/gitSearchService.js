class gitSearchService {
    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
        this.repoSearchUrl = 'https://api.github.com/search/repositories';
    }
    formRequestParams(params) {
        var formattedParams = {};
        formattedParams.q = params.language ? params.q + '+language:' + params.language : params.q;
        formattedParams.sort = params.sort ? params.sort : 'star';
        formattedParams.order = params.order ? params.order : 'desc';
        return formattedParams;
    }

    search(params) {
        var formattedParams = this.formRequestParams(params);
        return this.$http.get(this.repoSearchUrl, { params: formattedParams});
    }
}

gitSearchService.$inject = ['$http'];
export default gitSearchService;