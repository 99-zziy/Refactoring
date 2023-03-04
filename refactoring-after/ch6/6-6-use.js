import { getDefaultOwner } from './6-6.js';
// 문제점 : 기존 값이 바뀜
const owner = getDefaultOwner();
owner.firstName = '엘리';
console.log(owner);
console.log(getDefaultOwner());
