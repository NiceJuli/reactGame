import {createDesk} from '../src/services/index'
import {expect} from 'chai';

describe('createDesk', () => {

    it('Длина массива должна быть равна 36', () => {
        let lengthArr = createDesk().length;

        expect(lengthArr).to.equal(36);
    });

	describe('Количество карт каждой масти должно быть равно 9', () => {
	    it('Проверка масти черви', () => {
	        let desk = createDesk();
	        let cardsLength = desk.filter(card => card.suit == 'Черви').length;

	        expect(cardsLength).to.equal(9);
	    });

	    it('Проверка масти буби', () => {
	        let desk = createDesk();
	        let cardsLength = desk.filter(card => card.suit == 'Буби').length;

	        expect(cardsLength).to.equal(9);
	    });

	    it('Проверка масти пики', () => {
	        let desk = createDesk();
	        let cardsLength = desk.filter(card => card.suit == 'Пики').length;

	        expect(cardsLength).to.equal(9);
	    });

	    it('Проверка масти трефы', () => {
	        let desk = createDesk();
	        let cardsLength = desk.filter(card => card.suit == 'Трефы').length;

	        expect(cardsLength).to.equal(9);
	    });
    });
});