import { LaunchApp } from '../src/index.js';
import './index.less';

function addHandler(element, type, handler) {
    if (!element) return;
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
    } else {
        element["on" + type] = handler;
    }
}
const tipEle = document.getElementById('tip');
console.log = function addHandler(key, info) {
    tipEle.innerHTML = tipEle.innerHTML + '<br/>' + key + (info ? JSON.stringify(info) : '');
}

const tiebaConfig = {
    scheme: {
        android: {
            index: {
                protocol: 'tbmaintab',
                path: 'tieba.bai' + 'du.com',
            },
            frs: {
                protocol: 'tbfrs',
                path: 'tieba.bai' + 'du.com',
                param: {},
                paramMap: {
                    forumName: 'kw'
                }
            },
            pb: {
                protocol: 'tbpb',
                path: 'tieba.bai' + 'du.com',
                paramMap: {
                    threadId: 'tid'
                }
            },
            pbtwzb: {
                protocol: 'tbphotolive',
                path: 'tieba.bai' + 'du.com',
            },
            usercenter: {
                protocol: 'com.baidu.tieba',
                path: 'usercenter',
            },
            videosquare: {
                protocol: 'com.baidu.tieba',
                path: 'videosquare',
            },
            emotioncenter: {
                protocol: 'com.baidu.tieba',
                path: 'emotioncenter',
            },
            membercenter: {
                protocol: 'com.baidu.tieba',
                path: 'membercenter',
            },
            webview: {
                protocol: 'com.baidu.tieba',
                path: 'tbwebview',
                param: {
                    url: 'http://www.baidu.com'
                }
            },
        },
        ios: {
            index: {
                protocol: 'com.baidu.tieba',
                path: 'jumptoforum'
            },
            frs: {
                protocol: 'com.baidu.tieba',
                path: 'jumptoforum',
                paramMap: {
                    forumName: 'tname'
                }
            },
            pb: {
                protocol: 'com.baidu.tieba',
                path: 'jumptoforum',
                paramMap: {
                    threadId: 'kz'
                }
            }
        }
    },
    univerlink: {
        index: {
            url: 'https://tieba.baidu.com',
            param: {
            },
        },
        frs: {
            url: 'https://tieba.baidu.com/f',
            param: {
                // kw: 'jawidx'
            },
            paramMap: {
                forumName: 'kw'
            }
        },
        pb: {
            url: 'https://tieba.baidu.com/p/{pid}',
            param: {
            },
            paramMap: {
                threadId: 'pid'
            }
        }
    },
    yingyongbao: {
        url: 'http://a.app.qq.com/o/simple.jsp',
        param: {
            pkgname: 'com.baidu.tieba'
        }
    },
    pkgs: {
        androidApk: {
            default: 'https://downpack.baidu.com/baidutieba_AndroidPhone_v8.8.8.6(8.8.8.6)_1020584c.apk',
            qqfriend: '',
        },
        appstore: {
            default: 'https://itunes.apple.com/app/apple-store/id477927812?pt=328057&ct=MobileQQ_LXY&mt=8',
            qqfriend: '',
        },
        yingyongbao: {
            default: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.tieba&ckey=CK1374101624513',
            qqfriend: '',
        }
    },
    downPage: 'http://ti' + 'eba.baidu.com/mo/q/activityDiversion/download',
    searchPrefix: (detector) => {
        if (detector.os.name == 'android') {
            return '//';
        }
        return '?';
    }
};
const tbCallApp = new LaunchApp(tiebaConfig);
const linkDefault = document.getElementsByClassName('j_default')[0];
const linkIndex = document.getElementsByClassName('j_index')[0];
const linkFrs = document.getElementsByClassName('j_frs')[0];
const linkPb = document.getElementsByClassName('j_pb')[0];
const linkUsercenter = document.getElementsByClassName('j_usercenter')[0];
const linkVideosquare = document.getElementsByClassName('j_videosquare')[0];
const linkTbwebview = document.getElementsByClassName('j_tbwebview')[0];
const linkEmotioncenter = document.getElementsByClassName('j_emotioncenter')[0];

addHandler(linkDefault, 'click', function () {
    tbCallApp.open();
});
addHandler(linkIndex, 'click', function () {
    tbCallApp.open({
        page: 'index',
        param: {}
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
addHandler(linkFrs, 'click', function () {
    tbCallApp.open({
        page: 'frs',
        param: { forumName: 'jawidx' }
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
addHandler(linkPb, 'click', function () {
    tbCallApp.open({
        page: 'pb',
        param: { threadId: 5444301754 }
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
addHandler(linkUsercenter, 'click', function () {
    tbCallApp.open({
        page: 'usercenter',
        param: { uid: 85000367 }
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
addHandler(linkVideosquare, 'click', function () {
    tbCallApp.open({
        page: 'videosquare',
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
addHandler(linkTbwebview, 'click', function () {
    tbCallApp.open({
        page: 'webview',
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
addHandler(linkEmotioncenter, 'click', function () {
    tbCallApp.open({
        page: 'emotioncenter',
    }, (status, detector) => {
        console.log('callback,', status, detector);
    });
});
