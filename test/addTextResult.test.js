import {addTextResult} from '../src/services/index'
import {expect} from 'chai';

describe('addTextResult', () => {

	describe('Должен вернуть текст сообщения', () => {

		let Card1 = {value: 1, name: '6', suit: 'Черви'}
		let Card2 = {value: 2, name: '7', suit: 'Черви'}
		let Card3 = {value: 2, name: '7', suit: 'Буби'}

	    it('Если карта первая больше второй', () => {
	        let result = addTextResult(Card2, Card1);
	        let message = '7 Черви больше, чем 6 Черви. Карты ушли к Игроку1.'

	        expect(result).to.equal(message);
	    });

	    it('Если карта вторая больше первой', () => {
	        let result = addTextResult(Card1, Card2);
	        let message = '7 Черви больше, чем 6 Черви. Карты ушли к Игроку2.'

	        expect(result).to.equal(message);
	    });

	    it('Если карты равны', () => {
	        let result = addTextResult(Card2, Card3);
	        let message = 'Спор. Карты: 7 Черви и 7 Буби'

	        expect(result).to.equal(message);
	    });

    });
});