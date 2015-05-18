/**
 * Created by Andriy Ermolenko on 24.03.15.
 */
var easyreport = require('../lib');
var report = easyreport.init({
    title: 'Report1',
    author: 'Andrew',
    names: [
        {name: 'a', value: 'AAA'},
        {name: 'c', value: 'Something else'},
        {name: 'v', value: 'Another'}
    ],
    columns: ['a','b','c','v'],
    records: [
        [1, 2, 3, 3453345345345345],
        [2, 3, 4, 346346346],
        [3, 2, 3, 346346346346],
        [12, 45, 5, 46346346346346],
        [1, 2, 3, 3464634634634],
        [2, 3, 4, 4643634634634],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346],
        [3, 2, 3, 46346346346346]
    ],
    fontSize: '12px',
    mode: 'portrait',
    paging: true,
    time: true
});
if (!process.env.LOG) report.write();
else console.log(report.generateInnerHTML());