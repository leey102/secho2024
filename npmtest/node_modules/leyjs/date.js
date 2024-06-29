//const moment = require('moment/moment'); CJS방식
import moment from 'moment'; //ESM방식
//import { Cat } from './oop.js';
import Cat, { Dog } from './oop.js';

const locale = 'ko';
//moment.locale('ja'); 일본
//moment.locale('zn-ch'); 중국
//moment.locale('us'); 미국
//moment.locale('ko'); 한국
moment.locale(locale);

const d = new Date();
console.log('🚀 ~ d:', d.toLocaleString());
const m = moment();
console.log('🚀 ~ m:', m.format('LLL'));
console.log('🚀 ~ m:', m.format('dddd'));
console.log('🚀 ~ m:', m.format('YYYY-WW-DD (ddd) hh:mm:ss'));
console.log('🚀 ~ m:', m.fromNow());

const writtenDate = moment('2024-04-30');
console.log('🚀 ~ writtenDate:', writtenDate.fromNow());

const nabi = new Cat('Nabi');
const lucy = new Dog('Lucy');
