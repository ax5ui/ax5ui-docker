/*
 * Copyright (c) 2017. tom@axisj.com
 * - github.com/thomasjang
 * - www.axisj.com
 */

/*
 test.calendar.js
 TODO event test
 */

/* ax5.calendar.setConfig */
var myDocker;
describe('ax5.docker TEST', function () {

    var tmpl = '<div data-ax5docker="docker1" style="height: 500px;background: #eee;padding: 5px;"></div>';

    $(document.body).append(tmpl);

    it('check docker type', function (done) {
        done(typeof new ax5.ui.docker() == "object" ? "" : "check type error");
    });

    it('docker setConfig', function (done) {
        myDocker = new ax5.ui.docker();
        myDocker.setConfig({
            target: $('[data-ax5docker="docker1"]'),
            icons: {
                close: '<i class="fa fa-times" aria-hidden="true"></i>',
                more: '<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>'
            },
            panels: [
                {
                    type: "row", // type : row, column, stack
                    panels: [
                        {
                            type: "column",
                            panels: [
                                {
                                    type: "panel",
                                    name: "my name 1",
                                    moduleName: "content",
                                    moduleState: {
                                        data1: "data1"
                                    }
                                },
                                {
                                    type: "panel",
                                    name: "my name 2",
                                    moduleName: "content",
                                    moduleState: {
                                        data1: "data2"
                                    }
                                }
                            ]
                        },
                        {
                            type: "stack",
                            panels: [
                                {
                                    type: "panel",
                                    name: "my name 3",
                                    moduleName: "content",
                                    moduleState: {
                                        data1: "data3"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            disableClosePanel: false,
            disableDragPanel: false,
            control: {
                before: function (that, callback) {
                    if (that.controlType === "destroy") {
                        if (confirm("Do you want to Delete?")) {
                            setTimeout(function () {
                                callback();
                            }, 300);

                            return;
                        }
                    } else {
                        callback();
                        return;
                    }
                }
            },
            menu: {
                theme: 'default',
                position: "absolute",
                icons: {
                    'arrow': '▸'
                }
            }
        });

        done();
    });

    it('docker repaint', function (done) {
        done(myDocker.repaint() === myDocker ? "" : "docker repaint error");
    });

    it('docker addPanel', function (done) {
        done(myDocker.addPanel('0.1', 'stack', {
            type: 'panel',
            name: 'addPanel',
            moduleName: 'content'
        }) === myDocker ? "" : "docker addPanel error");
    });

    it('docker setPanels', function (done) {
        done(myDocker.setPanels([
            {
                type: "row", // type : row, column, stack
                panels: [
                    {
                        type: "column",
                        panels: [
                            {
                                type: "panel",
                                name: "my name set",
                                moduleName: "content",
                                moduleState: {
                                    data1: "data1"
                                }
                            },
                            {
                                type: "panel",
                                name: "my name panels",
                                moduleName: "content",
                                moduleState: {
                                    data1: "data2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]) === myDocker ? "" : "docker setPanels error");
    });

    it('docker activePanel', function (done) {
        done(myDocker.activePanel("panels[0].panels[0].panels[1]") === myDocker ? "" : "docker activePanel error");
    });
});