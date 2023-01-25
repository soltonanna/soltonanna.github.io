import { 
    BlogJsFund, 
    BlogJsBehind,
    BlogArrays,
    BlogJsOop 
} from '../media/index.js';

export const blogItems = [
    {
        id: `b_1`,
        category: 'other',
        name: 'JS Fundamentals',
        date: '24.01.2023',
        desc: "In this topic you can find some useful information about JavaScript Fundamentals. Why we use JS, short history and some basic information",
        moreDesc: `<div>
            <p><a href=${BlogJsFund.img0} target="_blank"><img src="${BlogJsFund.img0}" /></a></p>
            <p><a href=${BlogJsFund.img1} target="_blank"><img src=${BlogJsFund.img1} /></a></p>
            <p><a href=${BlogJsFund.img2} target="_blank"><img src=${BlogJsFund.img2} /></a></p>
            <p><a href=${BlogJsFund.img3} target="_blank"><img src=${BlogJsFund.img3} /></a></p>
            <p><a href=${BlogJsFund.img4} target="_blank"><img src=${BlogJsFund.img4} /></a></p>
            <p><a href=${BlogJsFund.img5} target="_blank"><img src=${BlogJsFund.img5} /></a></p>
            <p><a href=${BlogJsFund.img6} target="_blank"><img src=${BlogJsFund.img6} /></a></p>
            <p><a href=${BlogJsFund.img7} target="_blank"><img src=${BlogJsFund.img7} /></a></p>
            <p><a href=${BlogJsFund.img8} target="_blank"><img src=${BlogJsFund.img8} /></a></p>
            <p><a href=${BlogJsFund.img9} target="_blank"><img src=${BlogJsFund.img9} /></a></p>
            <p><a href=${BlogJsFund.img10} target="_blank"><img src=${BlogJsFund.img10} /></a></p>
            <hr />
            <p>Resources: <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank">The Complete JavaScript Course 2023: From Zero to Expert! (Author:Jonas Schmedtmann)</a></p>
        </div>`,
        imgUrl: BlogJsFund.imgMain
    },
    {
        id: `b_2`,
        category: 'other',
        name: 'JavaScript Behind the Scenes',
        date: '25.01.2023',
        desc: "In this topic you can see how JavaScript work behind the scene. Know about Event Loom, Hoisting and etc.",
        moreDesc: `<div>
            <p><a href=${BlogJsBehind.img1} target="_blank"><img src="${BlogJsBehind.img1}" /></a></p>
            <p><a href=${BlogJsBehind.img2} target="_blank"><img src="${BlogJsBehind.img2}" /></a></p>
            <p><a href=${BlogJsBehind.img3} target="_blank"><img src="${BlogJsBehind.img3}" /></a></p>
            <p><a href=${BlogJsBehind.img4} target="_blank"><img src="${BlogJsBehind.img4}" /></a></p>
            <p><a href=${BlogJsBehind.img5} target="_blank"><img src="${BlogJsBehind.img5}" /></a></p>
            <p><a href=${BlogJsBehind.img6} target="_blank"><img src="${BlogJsBehind.img6}" /></a></p>
            <p><a href=${BlogJsBehind.img7} target="_blank"><img src="${BlogJsBehind.img7}" /></a></p>
            <p><a href=${BlogJsBehind.img8} target="_blank"><img src="${BlogJsBehind.img8}" /></a></p>
            <p><a href=${BlogJsBehind.img9} target="_blank"><img src="${BlogJsBehind.img9}" /></a></p>
            <p><a href=${BlogJsBehind.img10} target="_blank"><img src="${BlogJsBehind.img10}" /></a></p>
            <p><a href=${BlogJsBehind.img11} target="_blank"><img src="${BlogJsBehind.img11}" /></a></p>
            <p><a href=${BlogJsBehind.img12} target="_blank"><img src="${BlogJsBehind.img12}" /></a></p>
            <p><a href=${BlogJsBehind.img13} target="_blank"><img src="${BlogJsBehind.img13}" /></a></p>
            <p><a href=${BlogJsBehind.img14} target="_blank"><img src="${BlogJsBehind.img14}" /></a></p>
            <p><a href=${BlogJsBehind.img15} target="_blank"><img src="${BlogJsBehind.img15}" /></a></p>
            <p><a href=${BlogJsBehind.img16} target="_blank"><img src="${BlogJsBehind.img16}" /></a></p>
            <p><a href=${BlogJsBehind.img17} target="_blank"><img src="${BlogJsBehind.img17}" /></a></p>
            <p><a href=${BlogJsBehind.img18} target="_blank"><img src="${BlogJsBehind.img18}" /></a></p>
            <p><a href=${BlogJsBehind.img19} target="_blank"><img src="${BlogJsBehind.img19}" /></a></p>
            <p><a href=${BlogJsBehind.img20} target="_blank"><img src="${BlogJsBehind.img20}" /></a></p>
            <p><a href=${BlogJsBehind.img21} target="_blank"><img src="${BlogJsBehind.img21}" /></a></p>
            <p><a href=${BlogJsBehind.img22} target="_blank"><img src="${BlogJsBehind.img22}" /></a></p>
            <p><a href=${BlogJsBehind.img23} target="_blank"><img src="${BlogJsBehind.img23}" /></a></p>
            <p><a href=${BlogJsBehind.img24} target="_blank"><img src="${BlogJsBehind.img24}" /></a></p>
            <hr />
            <p>Resources: <a href="https://www.udemy.com/course/the-complete-javascript-course/">The Complete JavaScript Course 2023: From Zero to Expert! (Author:Jonas Schmedtmann)</a></p>
        </div>`,
        imgUrl: BlogJsBehind.imgMain
    },
    {
        id: `b_3`,
        category: 'other',
        name: 'Working with Arrays',
        date: '25.01.2023',
        desc: "Do you know why we using Arrays and which methods can we use? This topic help you find main information about them.",
        moreDesc: `<div>
            <p>One of the most commonly used objects in JavaScript is called an <span>Array</span>. An array is a data structure that contains a list of elements which store multiple values under a single variable. Arrays are considered to be special kinds of objects. </p>
            <p>In JavaScript, arrays use numbered indexes. Whereas, objects are used as named indexes.</p>
            <p>Array items — also known as array elements — are nothing more than the items stored inside an array. Items in an array can be of any object or data type that JavaScript supports, including strings to integers and booleans.</p>
            <code>const cars = ["Saab", "Volvo", "BMW"];</code>
            <code>const cars = [];
            cars[0]= "Saab";
            cars[1]= "Volvo";
            </code>
            <code>const cars = new Array("Saab", "Volvo", "BMW");</code>
            <hr />
            <p><a href=${BlogArrays.img1} target="_blank"><img src="${BlogArrays.img1}" /></a></p>
            <hr />
            <p>Resources: <a href="https://www.udemy.com/course/the-complete-javascript-course/">The Complete JavaScript Course 2023: From Zero to Expert! (Author:Jonas Schmedtmann)</a></p>
        </div>`,
        imgUrl: BlogArrays.imgMain
    },
    {
        id: `b_4`,
        category: 'other',
        name: 'OOP',
        date: '17.01.2023',
        desc: "In this topic you can find some useful information about Object-oriented programming in Javascript",
        moreDesc: `<div>
            <p><a href=${BlogJsOop.img0} target="_blank"><img src="${BlogJsOop.img0}" /></a></p>
            <p><a href=${BlogJsOop.img1} target="_blank"><img src=${BlogJsOop.img1} /></a></p>
            <p><a href=${BlogJsOop.img2} target="_blank"><img src=${BlogJsOop.img2} /></a></p>
            <p><a href=${BlogJsOop.img3} target="_blank"><img src=${BlogJsOop.img3} /></a></p>
            <p><a href=${BlogJsOop.img4} target="_blank"><img src=${BlogJsOop.img4} /></a></p>
            <p><a href=${BlogJsOop.img5} target="_blank"><img src=${BlogJsOop.img5} /></a></p>
            <p><a href=${BlogJsOop.img6} target="_blank"><img src=${BlogJsOop.img6} /></a></p>
            <p><a href=${BlogJsOop.img7} target="_blank"><img src=${BlogJsOop.img7} /></a></p>
            <p><a href=${BlogJsOop.img8} target="_blank"><img src=${BlogJsOop.img8} /></a></p>
            <p><a href=${BlogJsOop.img9} target="_blank"><img src=${BlogJsOop.img9} ></a></p>
            <p><a href=${BlogJsOop.img10} target="_blank"><img src=${BlogJsOop.img10} /></a></p>
            <hr />
            <p>Resources: <a href="https://www.udemy.com/course/the-complete-javascript-course/">The Complete JavaScript Course 2023: From Zero to Expert! (Author:Jonas Schmedtmann)</a></p>
        </div>`,
        imgUrl: BlogJsOop.imgMain
    },
]