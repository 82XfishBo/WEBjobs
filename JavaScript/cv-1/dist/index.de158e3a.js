let html1 = document.querySelector("#demo1");
let style = document.querySelector("#style");
let n = 0;
let string = `
/*你好,我是一名前端小菜鸟
接下来我要展示我的三脚猫功夫了
看招!!!
看着那个灰色的方块，我会让它变得不一样一些。*/

#demo2{
    border-radius:50%;
}

/*这个灰色的圆将被两种颜色
一分为二！*/
#demo2{
    border:1px solid black;
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}
/*看着已经有点像太极的雏形了
那就再往上靠靠吧。*/
#demo2::before{
    width:4vw;
    height:4vw;
    background-color:#ccc;
}
#demo2::after{
    width:4vw;
    height:4vw;
    background-color:#ccc;
}
#demo2::before{
    background-color:black;
}
#demo2::after{
    background-color:white;
}

/*将两个方块变成球。*/
#demo2::before{
    border-radius:50%;
}
#demo2::after{
    border-radius:50%;
}

/*球两边散开
而后居中*/
#demo2{
    justify-content :space-around;
    align-items:center;
    flex-direction:column;
}

/*太极两点的位置已经妥当，接下来就要完善分割阴阳的线条*/
#demo2::before{
    border:4.25vw solid white;
}
#demo2::after{
    border:4.25vw solid black;
}

/*大功告成！
这样就完成了太极图案。*/
`;
let string2 = ``;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === `\n`) string2 += `<br>`;
        else if (string[n] === ` `) string2 += "&nbsp";
        else string2 += string[n];
         //写入string2
        n += 1;
        style.innerHTML += string[n];
        html1.innerHTML = string2;
        window.scrollTo(0, 80000);
        demo1.scrollTo(0, 80000);
        n < string.length && step();
    }, 100);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
