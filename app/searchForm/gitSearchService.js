class gitSearchService {
    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
        this.repoSearchUrl = 'https://api.github.com/search/repositories';
    }
    search(params) {
        return this.$http.get(this.repoSearchUrl, { params: params});
    }
}

gitSearchService.$inject = ['$http'];
export default gitSearchService;