
import { Abstraction, setterHelper, getterHelper } from './index';
import { IAbstractApiDescription, simpleApiTestFactory } from './test-factory';

const TEST_NUMBERS: number[] = [12, 34];
const TEST_STRINGS: string[] = ['abc', 'xyz'];

export interface ITestOptions {
    string: string;
    number: number;

    stringSetter: string;
    numberSetter: number;

    stringGetter: string;
    numberGetter: number;

    stringSetterAndGetter: string;
    numberSetterAndGetter: number;
}

export interface ITest extends ITestOptions {
    setStringSetter(value: string, origin?: any[]): void;
    setNumberSetter(value: number, origin?: any[]): void;

    getStringGetter(): string;
    getNumberGetter(): number;

    setStringSetterAndGetter(value: string, origin?: any[]): void;
    getStringSetterAndGetter(): string;

    setNumberSetterAndGetter(value: number, origin?: any[]): void;
    getNumberSetterAndGetter(): number;
}

export var testApiDescription: IAbstractApiDescription = {
    number: {methodTypes: [], testData: TEST_NUMBERS},
    numberGetter: {methodTypes: ['get'], testData: TEST_NUMBERS},
    numberSetter: {methodTypes: ['set'], testData: TEST_NUMBERS},
    numberSetterAndGetter: {methodTypes: ['set', 'get'], testData: TEST_NUMBERS},

    string: {methodTypes: [], testData: TEST_STRINGS},
    stringGetter: {methodTypes: ['get'], testData: TEST_STRINGS},
    stringSetter: {methodTypes: ['set'], testData: TEST_STRINGS},
    stringSetterAndGetter: {methodTypes: ['set', 'get'], testData: TEST_STRINGS}
};

export class TestAbstraction extends Abstraction implements ITest {

    public string: string;
    public number: number;

    public stringGetter: string;
    public numberGetter: number;

    public stringSetter: string;
    public numberSetter: number;

    public stringSetterAndGetter: string;
    public numberSetterAndGetter: number;

    constructor(opts: ITest) {
        super();
        this.string = opts.string;
        this.number = opts.number;

        this.stringGetter = opts.stringGetter;
        this.numberGetter = opts.numberGetter;

        this.stringSetter = opts.stringSetter;
        this.numberSetter = opts.numberSetter;

        this.stringSetterAndGetter = opts.stringSetterAndGetter;
        this.numberSetterAndGetter = opts.numberSetterAndGetter;
    }

    public getNumberGetter(): number {
        return getterHelper(this, 'numberGetter');
    }
    public getStringGetter(): string {
        return getterHelper(this, 'stringGetter');
    }

    public setNumberSetter(value: number, origin: any[] = []): void {
        setterHelper(this, 'numberSetter', value, origin);
    }
    public setStringSetter(value: string, origin: any[] = []): void {
        setterHelper(this, 'stringSetter', value, origin);
    }

    public getNumberSetterAndGetter(): number {
        return getterHelper(this, 'numberSetterAndGetter');
    }
    public setNumberSetterAndGetter(value: number, origin: any[] = []): void {
        setterHelper(this, 'numberSetterAndGetter', value, origin);
    }
    public getStringSetterAndGetter(): string {
        return getterHelper(this, 'stringSetterAndGetter');
    }
    public setStringSetterAndGetter(value: string, origin: any[] = []): void {
        setterHelper(this, 'stringSetterAndGetter', value, origin);
    }
}

describe('Abstraction', (): void => {
    simpleApiTestFactory('TestAbstraction', TestAbstraction, testApiDescription);
});
