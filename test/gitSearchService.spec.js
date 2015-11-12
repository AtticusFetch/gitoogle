'use strict';

var sut,
    searchController,
    $controller,
    searchRequestHandler,
    $httpBackend;

describe('git search service', function () {
    beforeEach(function () {
        module('app');
        inject(function ($injector) {
            sut = $injector.get('gitSearchService');
            $controller = $injector.get('$controller');
            searchController = $controller('searchFormController');
            $httpBackend = $injector.get('$httpBackend');
            searchRequestHandler = $httpBackend.when('GET', 'https://api.github.com/search/repositories/:q&:sort&:order')
                .respond({});
            searchController.query = 'Tetris';
            searchController.language = 'JavaScript';
            expectedParams = {
                q: 'Tetris',
                language: 'JavaScript'
            };
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should send get request to git with expected params', function () {
        var expected_request = 'https://api.github.com/search/repositories?order=desc&q=Tetris%2Blanguage:JavaScript&sort=star';
        $httpBackend.expectGET(expected_request).respond({});
        sut.search(expectedParams);
        $httpBackend.flush();
    });

    it('should form valid search params', function () {
        var expected_request = 'https://api.github.com/search/repositories';
        var params = {
            q: 'Tetris',
            language: 'JavaScript',
            sort: 'star'
        };
        var expectedFormattedParams = {
            q: 'Tetris+language:JavaScript',
            sort: 'star',
            order: 'desc'
        };
        expect(sut.formRequestParams(params)).toEqual(expectedFormattedParams);
    })
});