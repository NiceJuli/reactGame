import {giveOutCards} from '../src/services/index'
import {expect} from 'chai'
import _ from 'lodash'

describe('giveOutCards', () => {

	var fullArr = _.range(36);

    it('Функция возвращает массив', () => {
        let typeArr = _.isArray(giveOutCards(fullArr));

        expect(typeArr).to.equal(true);
    });

    it('Длина массива равна двум', () => {
        let arrlength = giveOutCards(fullArr).length;

        expect(arrlength).to.equal(2);
    });

    it('Количество элементов в первом массиве равно 18', () => {
        let arrlength = giveOutCards(fullArr)[0].length;

        expect(arrlength).to.equal(18);
    });

    it('Количество элементов во втором массиве равно 18', () => {
        let arrlength = giveOutCards(fullArr)[1].length;

        expect(arrlength).to.equal(18);
    });

    it('Элементы двух массивов не совпадают', () => {
    	let newArr = giveOutCards(fullArr);
    	let equals = 0;
    	_.forEach(newArr[0], function(first) {
		  	_.forEach(newArr[1], function(second) {
			  	if (first == second) equals++
			});
		});

        expect(equals).to.equal(0);
    });
});