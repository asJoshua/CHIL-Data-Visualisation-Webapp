import {jest} from '@jest/globals'

//@ts-expect-error Boilerplate
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))
