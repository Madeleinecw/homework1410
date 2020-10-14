import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(App);
    })

    it('enterNum changes running total', () => {
            wrapper.vm.previousTotal = 4
            wrapper.vm.add('5');
            expect(wrapper.vm.runningTotal).to.equal(9)
        }),

        it('Should be able to add', () => {
            wrapper.vm.previousTotal = 1;
            wrapper.vm.add(4);
            expect(wrapper.vm.runningTotal).to.equal(5)
        }),

        it('should be able to subtract', () => {
            wrapper.vm.previousTotal = 7;
            wrapper.vm.subtract(4);
            expect(wrapper.vm.runningTotal).to.equal(3)
        }),

        it('should be able to multiply', () => {
            wrapper.vm.previousTotal = 3;
            wrapper.vm.multiply(5);
            expect(wrapper.vm.runningTotal).to.equal(15)
        }),

        it('should be able to divide', () => {
            wrapper.vm.previousTotal = 21;
            wrapper.vm.divide(7);
            expect(wrapper.vm.runningTotal).to.equal(3)
        }),

        it('should be able to concatenate clicks', () => {
            wrapper.vm.numberClick(5);
            wrapper.vm.numberClick(5);
            expect(wrapper.vm.runningTotal).to.equal(55)
        }),

        it('should be able to chain operations', () => {
            wrapper.vm.numberClick(4);
            wrapper.vm.operatorClick('+');
            wrapper.vm.numberClick(4);
            wrapper.vm.operatorClick('+');
            wrapper.vm.numberClick(4);
            wrapper.vm.operatorClick('=')
            expect(wrapper.vm.runningTotal).to.equal(12)
        }),

        it('should be able to clear running total', () => {
            wrapper.vm.runningTotal = 4;
            wrapper.vm.clearClick();
            expect(wrapper.vm.runningTotal).to.equal(0)
        })
})