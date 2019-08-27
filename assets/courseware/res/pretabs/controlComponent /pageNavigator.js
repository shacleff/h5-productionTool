/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-03-27 16:29:31
 * @LastEditTime: 2019-08-27 13:21:10
 * @LastEditors: Please set LastEditors
 */
const postMessage = require('postMessage');

cc.Class({
    extends: cc.Component,

    properties: {
        pageCount: {
            default: 1,
            displayName: '页面总数'
        },
        localDebugging: {
            default: false,
            displayName: '本地课件预览'
        },

        // 低龄课件选中状态
        juniorCoursewareState: {
            default: true,
            displayName: '低龄课件'
        },

        // 低龄课件页面配置
        juniorCoursewarePage: {
            default: "",
            displayName: '低龄课件页面'
        },
        
        // 高龄课件选中状态
        seniorCoursewareState: {
            default: false,
            displayName: '高龄课件'
        },

        // 高龄课件页面配置
        seniorCoursewarePage: {
            default: "",
            displayName: '高龄课件页面'
        },

    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.currentPageSeq = 1;
        // this.nextPageSeq = this.currentPageSeq;
        // this.loadState = true;

        // // 节点常驻
        cc.game.addPersistRootNode(this.node);

        // // 本地与远程
        // if (this.localDebugging) {
        //     this.node.getChildByName("localControl").active = true;
        //     this.loadscene(this.currentPageSeq);
        // } else {
        //     this.loadscene(this.currentPageSeq, function () {
        //         postMessage.init(this);
        //     }.bind(this));
        // }
    },

    update(dt) {
        // if (this.nextPageSeq && this.nextPageSeq !== this.currentPageSeq && this.loadState && !this.localDebugging) {
        //     this.loadState = false;
        //     this.loadscene(this.nextPageSeq, function () {
        //         this.loadState = true;
        //     }.bind(this));
        // }
        dt++;
        if(dt > 10){
            console.log(dt)
            dt = 0;
        }
    },

    // prev() {
    //     console.log('prev');
    //     if (this.currentPageSeq > 1) {
    //         this.currentPageSeq--;
    //         this.loadscene(this.currentPageSeq);
    //     }
    // },

    // next() {
    //     console.log('next');
    //     if (this.currentPageSeq < this.pageCount) {
    //         this.currentPageSeq++;
    //         this.loadscene(this.currentPageSeq);
    //     }
    // },

    // // 
    // // 根据传参加载对应的场景
    // //
    // loadscene(seq, callback) {
    //     seq = parseInt(seq);
    //     let curPageNum;

    //     // 选中低龄课件
    //     if (this.juniorCoursewareState) {
    //         curPageNum = this.juniorCoursewarePage[seq - 1];
    //     }
        
    //     // 选中高龄课件
    //     if (this.seniorCoursewareState) {
    //         curPageNum = this.seniorCoursewarePage[seq - 1];
    //     } 

    //     if (!curPageNum) return;
    //     let page = 'page' + curPageNum;
    //     if (page) {
    //         cc.director.loadScene(page, function () {
    //             this.currentPageSeq = seq;
    //             if (callback) {
    //                 callback();
    //             }
    //         }.bind(this));
    //     }
    // },

    // // 
    // // 根据传参设置下一页
    // //
    // setNextPageSeq(seq) {
    //     this.nextPageSeq = parseInt(seq);
    // },

});
