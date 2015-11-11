'use strict';

var sut,
    gitService,
    expectedParams;

describe('Search Form', function () {
    beforeEach(function () {
        module('app');
        inject(function ($controller, $injector) {
            sut = $controller('searchFormController');
            gitService = $injector.get('gitSearchService');
            sut.query = 'Tetris';
            sut.language = 'JavaScript';
            expectedParams = {
                q: 'Tetris',
                language: 'JavaScript'
            };
        });
    });

    it('should form request params', function () {
        expect(sut.getRequestParams()).toEqual(expectedParams);
    });

    it('should call gitAPI service on submit', function () {
        spyOn(gitService, 'search').and.returnValue({
            success: function () {
                return {
                    error: function () {

                    }
                }
            }
        });
        sut.submit();
        expect(gitService.search).toHaveBeenCalledWith(expectedParams);
    })
});