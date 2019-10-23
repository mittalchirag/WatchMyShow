const request = require('request');

module.exports = function (router) {
    router.get('/allMovieTitle', function (req, res) {
        var uniqueMovieNames = [];
        var flag = 0;
        request('http://localhost:3030/api/allMovieTitle', function (err, response, body) {
            if (!err && response.statusCode === 200) {
                var data = JSON.parse(body);
                if (data.success) {
                    data.movies.forEach(element => {
                        uniqueMovieNames.push(element);
                    });

                } else {
                    flag += 1;
                }

                request('http://localhost:3031/api/allMovieTitle', function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        var data = JSON.parse(body);
                        if (data.success) {
                            data.movies.forEach(element => {
                                var found = 0;
                                uniqueMovieNames.forEach(name => {
                                    if (name.title === element.title) {
                                        found = 1;
                                    }
                                })
                                if (found != 1) {
                                    uniqueMovieNames.push(element);
                                    foiund = 0;
                                }
                            });
                        } else {
                            flag += 1;
                        }

                        if (flag != 2) {
                            res.status(200).json({
                                success: true,
                                movies: uniqueMovieNames
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Nothing found!'
                            });
                        }
                    } else if (!err && response.statusCode === 400) {
                        res.status(400).json({
                            success: false,
                            message: 'Nothing found!'
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                        });
                    }
                });
            } else if (!err && response.statusCode === 400) {
                res.status(400).json({
                    success: false,
                    message: 'Nothing found!'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                });
            }
        });

    });

    router.get('/movieTitle', function (req, res) {
        var query = req.query.query;
        var uniqueMovieNames = [];
        var flag = 0;
        request('http://localhost:3030/api/movieTitle?query=' + query, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                var data = JSON.parse(body);
                if (data.success) {
                    data.movies.forEach(element => {
                        element.where = "PVR";
                        uniqueMovieNames.push(element);
                    });

                } else {
                    flag += 1;
                }

                request('http://localhost:3031/api/movieTitle?query=' + query, function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        var data = JSON.parse(body);
                        if (data.success) {
                            data.movies.forEach(element => {
                                element.where = "Inox";
                                uniqueMovieNames.push(element);
                            });
                        } else {
                            flag += 1;
                        }

                        if (flag != 2) {
                            res.status(200).json({
                                success: true,
                                movies: uniqueMovieNames
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Nothing found!'
                            });
                        }
                    } else if (!err && response.statusCode === 400) {
                        res.status(400).json({
                            success: false,
                            message: 'Nothing found!'
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                        });
                    }
                });
            } else if (!err && response.statusCode === 400) {
                request('http://localhost:3031/api/movieTitle?query=' + query, function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        var data = JSON.parse(body);
                        if (data.success) {
                            data.movies.forEach(element => {
                                element.where = "Inox";
                                uniqueMovieNames.push(element);
                            });
                        } else {
                            flag += 1;
                        }

                        if (flag != 2) {
                            res.status(200).json({
                                success: true,
                                movies: uniqueMovieNames
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Nothing found!'
                            });
                        }
                    } else if (!err && response.statusCode === 400) {
                        res.status(400).json({
                            success: false,
                            message: 'Nothing found!'
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                        });
                    }
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                });
            }
        });
    });


    router.get('/movieGenre', function (req, res) {
        var query = req.query.query;
        var uniqueMovieNames = [];
        var flag = 0;
        request('http://localhost:3030/api/movieGenre?query=' + query, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                var data = JSON.parse(body);
                if (data.success) {
                    data.movies.forEach(element => {
                        element.where = "PVR";
                        uniqueMovieNames.push(element);
                    });

                } else {
                    flag += 1;
                }

                request('http://localhost:3031/api/movieGenre?query=' + query, function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        var data = JSON.parse(body);
                        if (data.success) {
                            data.movies.forEach(element => {
                                element.where = "Inox";
                                uniqueMovieNames.push(element);
                            });
                        } else {
                            flag += 1;
                        }

                        if (flag != 2) {
                            res.status(200).json({
                                success: true,
                                movies: uniqueMovieNames
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Nothing found!'
                            });
                        }
                    } else if (!err && response.statusCode === 400) {
                        res.status(400).json({
                            success: false,
                            message: 'Nothing found!'
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                        });
                    }
                });
            } else if (!err && response.statusCode === 400) {
                request('http://localhost:3031/api/movieGenre?query=' + query, function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        var data = JSON.parse(body);
                        if (data.success) {
                            data.movies.forEach(element => {
                                element.where = "Inox";
                                uniqueMovieNames.push(element);
                            });
                        } else {
                            flag += 1;
                        }

                        if (flag != 2) {
                            res.status(200).json({
                                success: true,
                                movies: uniqueMovieNames
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Nothing found!'
                            });
                        }
                    } else if (!err && response.statusCode === 400) {
                        res.status(400).json({
                            success: false,
                            message: 'Nothing found!'
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                        });
                    }
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                });
            }
        });
    });

    router.get('/allMovies', function (req, res) {
        var query = req.query.query;
        var uniqueMovieNames = [];
        var flag = 0;
        request('http://localhost:3030/api/allMovies', function (err, response, body) {
            if (!err && response.statusCode === 200) {
                var data = JSON.parse(body);
                if (data.success) {
                    data.movies.forEach(element => {
                        element.where = "PVR";
                        uniqueMovieNames.push(element);
                    });

                } else {
                    flag += 1;
                }

                request('http://localhost:3031/api/allMovies', function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        var data = JSON.parse(body);
                        if (data.success) {
                            data.movies.forEach(element => {
                                element.where = "Inox";
                                uniqueMovieNames.push(element);
                            });
                        } else {
                            flag += 1;
                        }

                        if (flag != 2) {
                            res.status(200).json({
                                success: true,
                                movies: uniqueMovieNames
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'Nothing found!'
                            });
                        }
                    } else if (!err && response.statusCode === 400) {
                        res.status(400).json({
                            success: false,
                            message: 'Nothing found!'
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                        });
                    }
                });
            } else if (!err && response.statusCode === 400) {
                res.status(400).json({
                    success: false,
                    message: 'Nothing found!'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!'
                });
            }
        });
    });

    return router;
};