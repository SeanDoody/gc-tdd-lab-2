const { describe, test, expect } = require('@jest/globals');
const script = require('./script');

describe('translate tests', () => {

    // 1. Multiple tests for words starting with different vowels.

    test('able tranlsates to ableway', () => {
        const output = script.translate('able');
        expect(output).toEqual('ableway');
    });

    test('elephant tranlsates to elephantway', () => {
        const output = script.translate('elephant');
        expect(output).toEqual('elephantway');
    });

    test('indigo tranlsates to indigoway', () => {
        const output = script.translate('indigo');
        expect(output).toEqual('indigoway');
    });

    test('open tranlsates to openway', () => {
        const output = script.translate('open');
        expect(output).toEqual('openway');
    });

    test('under tranlsates to underway', () => {
        const output = script.translate('under');
        expect(output).toEqual('underway');
    });

    // 2. At least one test for words starting with one consonant.

    test('word tranlsates to ordway', () => {
        const output = script.translate('word');
        expect(output).toEqual('ordway');
    });

    test('camp tranlsates to ampcay', () => {
        const output = script.translate('camp');
        expect(output).toEqual('ampcay');
    });

    test('dump translates to umpday', () => {
        const output = script.translate('dump');
        expect(output).toEqual('umpday');
    })

    // 3. At least one test for words starting with two consonants.

    test('shark translates to arkshay', () => {
        const output = script.translate('shark');
        expect(output).toEqual('arkshay');
    });

    test('clear translates to earclay', () => {
        const output = script.translate('clear');
        expect(output).toEqual('earclay');
    });

    test('whether translates to etherwhay', () => {
        const output = script.translate('whether');
        expect(output).toEqual('etherwhay');
    });

    // 4. At least one test for words starting with three consonants.

    test('pyre translates to epyray', () => {
        const output = script.translate('pyre');
        expect(output).toEqual('epyray');
    });

    test('thwart translates to artthway', () => {
        const output = script.translate('thwart');
        expect(output).toEqual('artthway');
    });

    test('thyme translates to ethymay', () => {
        const output = script.translate('thyme');
        expect(output).toEqual('ethymay');
    });

    // 5. At least one test checking for lower case conversion.

    test('CREATE translates to eatecray', () => {
        const output = script.translate('CREATE');
        expect(output).toEqual('eatecray');
    });

    test('Sean translates to eansay', () => {
        const output = script.translate('Sean');
        expect(output).toEqual('eansay');
    });

    test('camelCase translates to amelcasecay', () => {
        const output = script.translate('camelCase');
        expect(output).toEqual('amelcasecay');
    });

});