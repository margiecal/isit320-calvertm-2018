(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        14: function(e, n, t) {},
        16: function(e, n, t) {},
        18: function(e, n, t) {
            'use strict';
            t.r(n);
            var a = t(0),
                o = t.n(a),
                l = t(3),
                c = t.n(l),
                r = (t(14), t(4)),
                i = t(5),
                s = t(7),
                u = t(6),
                f = t(8),
                h = t(1),
                p = (t(16),
                (function(e) {
                    function n(e) {
                        var t;
                        return (
                            Object(r.a)(this, n),
                            ((t = Object(s.a)(
                                this,
                                Object(u.a)(n).call(this, e)
                            )).callCpuInfo = function() {
                                var e = Object(h.a)(Object(h.a)(t));
                                fetch('/ssh-runner/call-cpu-info')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(n) {
                                        console.log('parsed json', n.allData),
                                            e.setState({ allData: n.allData });
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (t.copyFile = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/script-pusher/copy-file')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        console.log('parsed json', e);
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (t.state = { allData: 'unknown' }),
                            t
                        );
                    }
                    return (
                        Object(f.a)(n, e),
                        Object(i.a)(n, [
                            {
                                key: 'render',
                                value: function() {
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement(
                                            'header',
                                            null,
                                            o.a.createElement(
                                                'h1',
                                                null,
                                                'Week6 SystemCheck '
                                            )
                                        ),
                                        o.a.createElement(
                                            'main',
                                            null,
                                            o.a.createElement(
                                                'button',
                                                { onClick: this.copyFile },
                                                'Copy File'
                                            ),
                                            o.a.createElement(
                                                'button',
                                                { onClick: this.callCpuInfo },
                                                'Run CPU Info'
                                            ),
                                            o.a.createElement(
                                                'p',
                                                null,
                                                this.state.allData
                                            )
                                        ),
                                        o.a.createElement(
                                            'footer',
                                            null,
                                            o.a.createElement(
                                                'p',
                                                null,
                                                '\xa9 by Margie Calvert '
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        n
                    );
                })(a.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            c.a.render(
                o.a.createElement(p, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        9: function(e, n, t) {
            e.exports = t(18);
        }
    },
    [[9, 2, 1]]
]);
//# sourceMappingURL=main.bccb15b4.chunk.js.map
