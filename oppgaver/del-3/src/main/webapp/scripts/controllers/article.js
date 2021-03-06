'use strict';

function ArticleController($scope, $routeParams, dataService) {
    $scope.showError = false;
    $scope.article = dataService.getArticle($routeParams.id).then(
        function(article) {
            $scope.article = article;
            $scope.comments = article.comments;
        },
        function() {
            showError('feil ved henting av artikkel');
        }
    );

    $scope.hideError = function() {
        $scope.showError = false;
    }

    function showError(message) {
        $scope.showError = true;
        $scope.errorMessage = message;
    }

    $scope.showArticleEdit = false;
    $scope.toggleShowArticleEdit = function() {
        $scope.showArticleEdit = !$scope.showArticleEdit;
    }

    $scope.deleteArticle = function(article) {
        dataService.deleteArticle(article._id).then(
            function() {
                window.location = "#/"
            },
            function() {
                showError('feil ved sletting av artikkel');
            }
        );
    }

    $scope.updateArticle = function(article) {
        dataService.updateArticle(article).then(
            function() {
//                _.find($scope.articles, function(current) {
//                    return current.id == article.id;
//                })
            },
            function() {
                showError('feil ved oppdatering av artikkel');
            }
        );
}

    $scope.deleteAllComments = function(article) {
        dataService.deleteAllComments(article._id).then(
            function() {
                $scope.comments = [];
            },
            function() {
                showError('feil ved sletting av alle kommentarer');
                $(window).scrollTop(0);
            }
        );
    }

    $scope.addComment = function(article, comment) {
        dataService.addComment(article._id, comment).then(
            function(article) {
                comment.author = '';
                comment.content = '';
                $scope.comments = article.comments;
                $(window).scrollTop(0);
            },
            function() {
                showError('feil ved lagring av kommentar');
            }
        );
    }
};
